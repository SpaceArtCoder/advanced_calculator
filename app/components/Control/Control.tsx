import styles from "./Control.module.scss"
import Clear from "../Clear/Clear"
import OnOff from "../OnOff/OnOff"

export default function Control() {
    return (
        <div className={styles.control}>
            <Clear />
            <OnOff />
        </div>
    )
}