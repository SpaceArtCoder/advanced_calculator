import styles from "./Screen.module.scss"
import Greeting from "../Greeting/Greeting"

export default function Screen() {
    return (
        <div className={styles.screen}>
            <Greeting />
        </div>
    )
}