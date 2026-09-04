'use client'

import styles from "./Operands.module.scss"
import { useCalculatorStore } from "@/app/store/useCalculatorStore"

export default function Operands() {

  function typeNums(num: string) {
    setFinalExpression(num);
    setShowHello(false);
  }

    // const setFirstNum = useCalculatorStore((state) => state.setFirstNum);
    const setFinalExpression = useCalculatorStore((state) => state.setFinalExpression);

    const setShowHello = useCalculatorStore((state) => state.setShowHello);

    return (
        <div className={styles.operands}>
            {['1','2','3','4','5','6','7','8','9','0'].map((num) => (
                <button key={num} className={styles.numbers} onClick={() => typeNums(num)}>{num}</button>
            ))}
        </div>
    )
}