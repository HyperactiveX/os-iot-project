import { Fragment, useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css'
import axios from 'axios'


export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const [loginState, setLoginState] = useState(false)
  
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

  return (
    <Fragment>
      {loginState ? <body>
      <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.title}>Temperature & Humidity</div>
            </div>
            <div className={styles.content}>
              <div className={styles.tempBox}>
                <b>Current Temperature:</b> 20 ํC
              </div>
              <div classname={styles.humidBox}>
                <b>Current Humidity:</b> 50%
              </div>
              <hr size="1" width="95%"></hr>
              <b className={styles.graphTitle}>Graph of Temperature & Humidity</b>
              <div className={styles.graphBox}></div>
            </div>
          </div>
      </body>
      : <center>502 Authentication error</center>}
    </Fragment>
  )
}
