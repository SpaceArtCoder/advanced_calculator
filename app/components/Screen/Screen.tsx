'use client'

import styles from "./Screen.module.scss"
import Greeting from "../Greeting/Greeting"
import FinalExpression from "../FinalExpression/FinalExpression"
import { useCalculatorStore } from "@/app/store/useCalculatorStore"
import { useEffect } from "react"

export default function Screen() {

    // Read state and grab actions
    // Calculator power status
    const power = useCalculatorStore((state) => state.power);

    // Greeting message display control
    const setShowHello = useCalculatorStore((state) => state.setShowHello);

    const showHello = useCalculatorStore((state) => state.showHello);


    useEffect(() => {

        // The timer starts only if the calculator is on
        if (!power) return;

        const greetingTimer = setTimeout(() => {
            // The greeting disappears after 5 seconds
            setShowHello(false);
        }, 5000);

        return () => clearTimeout(greetingTimer);

    }, [power, setShowHello]);

    

    return (
        <div className={styles.screen}>
            {/* Displays a welcome message on startup until operands or operators are entered*/}
            {power && !showHello ? <FinalExpression /> : power && showHello ? <Greeting power = {power} showHello = {showHello}/> : null}
            
            
            
        </div>
    )
}