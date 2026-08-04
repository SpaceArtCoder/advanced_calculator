import styles from "./Control.module.scss"
import Clear from "../Clear/Clear"

export default function Control() {
    return (
        <div className={styles.control}>
            <Clear />
        </div>
    )
}