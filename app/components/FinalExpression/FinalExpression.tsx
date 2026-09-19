import styles from './FinalExpression.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import BlinkingCursor from '@/app/components/BlinkingCursor/BlinkingCursor'

export default function FinalExpression() {

    // Search characters
    // const targetChars = ['*', '/', '+', '-'];

    // Contains everything entered by user
    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    const temporaryBuffer = useCalculatorStore((state) => state.temporaryBuffer);
    
    console.log(finalExpression);
    
    return (
        // The blinking cursor is displayed only when the field is empty
        // <output className={styles.input}>{finalExpression.length ? finalExpression : <BlinkingCursor />}</output>
        <output className={styles.input}>{temporaryBuffer ? temporaryBuffer  : <BlinkingCursor />}</output>
    )
}
// Сюда подставляется переменная состояния temporaryBuffer
// Он будет вместо finalExpression до тех пор пока не введен
// оператор. То есть, после набора оператора temporaryBuffer
// передает свое содержимое в finalExpression, а затем очищается.
// Далее, возможно, все повторится снова, при наборе операндов
// будет отображатся temporaryBuffer, но до ввода следующего
// оператора
// 2+2*2-7+8+7-6/4*3+2/9+2