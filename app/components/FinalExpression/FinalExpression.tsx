import styles from './FinalExpression.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import BlinkingCursor from '@/app/components/BlinkingCursor/BlinkingCursor'


export default function FinalExpression() {
    // Contains everything entered by user
    const finalExpression = useCalculatorStore((state) => state.finalExpression);
    const temporaryBuffer = useCalculatorStore((state) => state.temporaryBuffer);
    
    
    return (
        // The blinking cursor is displayed only when the field is empty
        // <output className={styles.input}>{finalExpression.length ? finalExpression : <BlinkingCursor />}</output>
        <output className={styles.input}>{temporaryBuffer || finalExpression.length ? [...finalExpression, temporaryBuffer] : <BlinkingCursor />}</output>
    )
}
