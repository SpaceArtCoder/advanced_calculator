import styles from './FinalExpression.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import BlinkingSpace from '@/app/components/BlinkingSpace/BlinkingSpace'

export default function FinalExpression() {

    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    return (
        <output className={styles.input}>{finalExpression || <BlinkingSpace />}</output>
    )
}