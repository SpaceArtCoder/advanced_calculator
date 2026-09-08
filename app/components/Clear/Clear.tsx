'use client'

// import styles from './Clear.module.scss'
import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'

export default function Clear() {

    const clearFinalExpression = useCalculatorStore((state) => state.clearFinalExpression);

    return (
        <button className={styles.clear} onClick={() => clearFinalExpression()}>C</button>
    )
}