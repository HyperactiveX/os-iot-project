import Head from 'next/head'
import { Fragment, useState } from 'react'
import styles from '../styles/Login.module.css'
import {useRouter} from 'next/router'
import axios from 'axios';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    try {
      const response = await axios.get('http://localhost:8080/authenticate', {params: {username, password}})
      if (response.data) {
        router.push("/home")
      } else {
        return alert("Wrong username or password!!!")
      }
    } catch (err) {
      console.warn(err);
    }
  }


  return (
    <Fragment>
      <Head>
        <title>Temp & Humidity monitor</title>
      </Head>
      <body>
        <div className={styles.container}>
          <div className={styles.signBox}>
              <div className={styles.loginInput}>
                <center>
                  <h2 className={styles.title}>Login</h2>
                  <input className={styles.input} placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)}></input>
                  <input className={styles.input} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                  <button onClick={login} className={styles.loginButton}>Login</button>
                </center>
              </div>
          </div>
        </div>
      </body>
    </Fragment>
  )
}
