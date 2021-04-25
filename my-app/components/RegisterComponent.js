import { Fragment, useState } from "react"
import {useRouter} from 'next/router'
import Template from './Template'
import styles from '../styles/register.module.css'


export default function RegisterComponent() {
    const router = useRouter()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errorState, setErrorState] = useState(0)
    const [confirm, setConfirm] = useState("")
    const [error, setError] = useState()

    const register = async () => {
        try {
            if (checkPassword()) {
                //await axios.post('http://localhost:8080/register', {params: {username, password}})
                router.push("/home")
            }
        } catch (err) {
          console.warn(err);
        }
    }

    const navigate = () => {
        router.push("/")
    }

    const checkPassword = () => {
        if (confirm != password) {
            setErrorState(true)
            setError("Password does not match")
            return false
        }
        setErrorState(false)
        return true
    }


    return (
        <Fragment>
            <Template>
                <center>
                    <h2 className={styles.title}>Register</h2>
                    <input className={styles.input} placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)}></input>
                    <input className={styles.input} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <input className={styles.input} placeholder="Confirm password" type="password" onChange={(e) => setConfirm(e.target.value)}></input>
                    <div className={errorState ? `${styles.errorMessage} ${styles.play}` : styles.errorMessage}>{error}</div>
                    <div className={styles.buttonBox}>
                        <button  className={styles.registerButton} onClick={register}>Register</button>
                        <button onClick={navigate} className={styles.backButton}>Back</button>
                    </div>
                </center>
            </Template>
        </Fragment>
    )
}