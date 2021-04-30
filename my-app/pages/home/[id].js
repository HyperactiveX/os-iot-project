import { Fragment, useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import {Line} from 'react-chartjs-2';


export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const [loginState, setLoginState] = useState(false)
  const [time, setTime] = useState()
  const [current, setCurrent] = useState()
  const [temperature, setTemperature] = useState()
  const [humidity, setHumidity] = useState()
  let dataFromDB


  useEffect(() => {
    checkLogIn()
  }, [id])

  const checkLogIn = async () => {
    if (id != null) {
      try {
        const response = await axios.get('http://localhost:8080/checkLogIn', { params: {
          id
        }})
        if (response.data === true) {
          setLoginState(true)
        } else {
          setLoginState(false)
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }

  useEffect(() => {
    results()
  }, [loginState])

  const results = async () => {
    const response = await axios.get('http://localhost:8080/getTemperatureAndHumidity')
    dataFromDB = response.data.rows
    setTime(dataFromDB.map(function (value) {
      return value.recordAt.slice(11, 19)
    }))
    setTemperature(dataFromDB.map(function (value) {
      return value.temperature
    }))
    setHumidity(dataFromDB.map(function (value) {
      return value.humidity
    }))
    setCurrent({temperature : dataFromDB[9].temperature, humidity : dataFromDB[9].humidity})
  } 

  const data = {
    labels: time,
    datasets: [
      {
        type: 'line',
        label: 'Temperature Graph',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255, 0, 0, 1)',
        borderColor: 'rgba(255, 0, 0, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 0, 0, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: temperature,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                  }
              }]
          }
        }
      }, {
        type: 'line',
        label: 'Humidity Graph',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(0, 0, 255, 1)',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0, 0, 255, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0, 0, 255, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: humidity,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
      }
    ],
  };

  return (
    <Fragment>
      {loginState && current != null ? <body>
      <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.title}>Temperature & Humidity</div>
            </div>
            <div className={styles.content}>
              <div className={styles.tempBox}>
                <b>Current Temperature:</b> {current.temperature}  ํC
              </div>
              <div classname={styles.humidBox}>
                <b>Current Humidity:</b> {current.humidity} %
              </div>
              <hr size="1" width="95%"></hr>
              <div className={styles.graphBox}>
                  <Line
                  data={data}
                  width={"90vw"}
                  height={"35vh"}
                />
              </div>
            </div>
          </div>
      </body>
      : <center>502 Authentication error</center>}
    </Fragment>
  )
}
