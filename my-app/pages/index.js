import Head from 'next/head'
import { Fragment} from 'react'
import Login from '../components/Login'
import styles from '../styles/Login.module.css'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Temp & Humidity monitor</title>
      </Head>
      <body>
        <Login/>
      </body>
    </Fragment>
  )
}
