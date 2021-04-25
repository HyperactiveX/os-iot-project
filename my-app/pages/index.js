import Head from 'next/head'
import { Fragment} from 'react'
import Login from '../components/Login'

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
