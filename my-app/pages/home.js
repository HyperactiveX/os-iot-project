import { Fragment } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <body>
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
    </Fragment>
  )
}