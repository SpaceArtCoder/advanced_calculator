import styles from "./Screen.module.scss"
import Greeting from "../Greeting/Greeting"
import { useState } from "react"

export default function Screen() {

    const [showHello, setShowHello] = useState(false); //Greeting word isn't shown by default only after clicking the on/off button

    return (
        <div className={styles.screen}>
            <Greeting showHello = {showHello}/>
        </div>
    )
}