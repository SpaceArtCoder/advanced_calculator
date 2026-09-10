import styles from './FinalExpression.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import BlinkingCursor from '@/app/components/BlinkingCursor/BlinkingCursor'
import { useEffect } from 'react';

import {signArray} from '../Operators/Operators'

export default function FinalExpression() {

    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    useEffect(() => {
        function calculator() {
            signArray.map((char) => {
                console.log(finalExpression.indexOf(char, 0));
            })
        }

        calculator();
    })
    

    return (
        // The blinking cursor is displayed only when the field is empty
        <output className={styles.input}>{finalExpression || <BlinkingCursor />}</output>
    )
}