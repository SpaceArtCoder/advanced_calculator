'use client'

import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'

export default function Clear() {

    const clearFinalExpression = useCalculatorStore((state) => state.clearFinalExpression);

    const clearTemporaryBuffer = useCalculatorStore((state) => state.clearTemporaryBuffer);

    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    const temporaryBuffer = useCalculatorStore((state) => state.temporaryBuffer);

    function clearAll() {
        // Clears the fields if they are not empty
        if (temporaryBuffer || finalExpression.length) {
            clearTemporaryBuffer();
            clearFinalExpression();
        }
    }
 
    return (
        // Clear all data button
        <button className={styles.clear} onClick={clearAll}>C</button>
    )
}