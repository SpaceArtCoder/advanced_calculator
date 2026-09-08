import styles from './FinalExpression.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import BlinkingCursor from '@/app/components/BlinkingCursor/BlinkingCursor'

export default function FinalExpression() {

    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    function calculator() {
        
    }

    return (
        // The blinking cursor is displayed only when the field is empty
        <output className={styles.input}>{finalExpression || <BlinkingCursor />}</output>
    )
}