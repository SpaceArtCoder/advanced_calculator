'use client'

import styles from "./Screen.module.scss"
import Greeting from "../Greeting/Greeting"
import { useCalculatorStore } from "@/app/store/useCalculatorStore"
import { useEffect } from "react"

export default function Screen() {
 
    // Read state and grab actions
    // Calculator power status
    const power = useCalculatorStore((state) => state.power);

    // Greeting message display control
    const toggleShowHello = useCalculatorStore((state) => state.toggleShowHello);

    // First operand value
    const firstNum = useCalculatorStore((state) => state.firstNum);


    useEffect(() => {
        // Only start a timer if showHello is currently true
        if (!power) return;

        const greetingTimer = setTimeout(() => {
            toggleShowHello();
        }, 5000);

        return () => clearTimeout(greetingTimer);

    }, [power, toggleShowHello]);

    return (
        <div className={styles.screen}>
            {/* Display a welcome message when turned on */}
            <Greeting power = {power}/>
            
        </div>
    )
}