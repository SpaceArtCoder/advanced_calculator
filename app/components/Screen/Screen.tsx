'use client'

import styles from "./Screen.module.scss"
import Greeting from "../Greeting/Greeting"
import { useCalculatorStore } from "@/app/store/useCalculatorStore"

export default function Screen() {
 
    // Read state and grab actions
    const showHello = useCalculatorStore((state) => state.showHello);

    return (
        <div className={styles.screen}>
            <Greeting showHello = {showHello}/>
        </div>
    )
}