'use client'

import styles from "./Operators.module.scss"
import { useCalculatorStore } from "@/app/store/useCalculatorStore";

export default function Operators() {

    // Arithmetic signs shown on the keyboard
    const signArray = ['+','-','*','/','√'];

    const setFinalExpession = useCalculatorStore((state) => state.setFinalExpression);
  
    return (
        <div className={styles.operators}>
          {signArray.map((sign, index) => (
          <button key={index} className={styles.signs} onClick={() => setFinalExpession(sign)}>{sign}</button>
          ))}
        </div>
    )
}