'use client'

import styles from "./Control.module.scss"
import Clear from "../Clear/Clear"
import OnOff from "../OnOff/OnOff"
import ClearLastNum from "../ClearLastNum/ClearLastNum"

export default function Control() {
    return (
        <div className={styles.control}>
            <Clear />
            <OnOff />
            <ClearLastNum />
        </div>
    )
}