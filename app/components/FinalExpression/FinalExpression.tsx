import styles from './FinalExpression.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import BlinkingCursor from '@/app/components/BlinkingCursor/BlinkingCursor'
import { useEffect } from 'react';


export default function FinalExpression() {

    // Search characters
    const targetChars = ['*', '/', '+', '-'];

    // Contains everything entered by user
    const finalExpression = useCalculatorStore((state) => state.finalExpression);
    

    return (
        // The blinking cursor is displayed only when the field is empty
        <output className={styles.input}>{finalExpression || <BlinkingCursor />}</output>
    )
}