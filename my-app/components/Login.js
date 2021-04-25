import { Fragment, useState, useEffect } from 'react'
import styles from '../styles/Login.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'
import Template from './Template'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState("")
  const [errorState, setErrorState] = useState(false)
  const login = async () => {
    try {
      const response = await axios.get('http://localhost:8080/authenticate', {params: {username, password}})
      if (response.data) {
        router.push("/home")
      } else {
        setError("Incorrect username or password")
        setErrorState(true)
      }
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <Fragment>
      <Template>
        <div className={styles.signBox}>
            <div className={styles.loginInput}>
                <center>
                    <h2 className={styles.title}>Login</h2>
                    <input className={styles.input} placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)}></input>
                    <input className={styles.input} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <div className={errorState ? `${styles.errorMessage} ${styles.play}` : styles.errorMessage}>{error}</div>
                    <div className={styles.buttonBox}>
                    <button onClick={login} className={styles.loginButton}>Login</button>
                    <button onClick={login} className={styles.signUpButton}>Sign up</button>
                    </div>
                </center>
            </div>
        </div>
      </Template>
    </Fragment>
  )
}
