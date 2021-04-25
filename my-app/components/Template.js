import { Fragment } from "react";
import styles from '../styles/templateStyle.module.css'

export default function Template({children}) {
    return (
        <Fragment>
            <body>
                <div className={styles.container}>
                    <div className={styles.signBox}>
                        <div className={styles.loginInput}>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </Fragment>
    )
}