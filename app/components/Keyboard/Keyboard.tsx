import styles from "./Keyboard.module.scss"
import Operators from "../Operators/Operators"

export default function Keyboard() {
    return (
        <div className={styles.keyboard}>
            <Operators />
        </div>
    )
}