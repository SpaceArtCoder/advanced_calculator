'use client'

import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'

export default function OnOff() {

    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    const clearFinalExpression = useCalculatorStore((state) => state.clearFinalExpression);

    const togglePower = useCalculatorStore((state) => state.togglePower);

    const setShowHello = useCalculatorStore((state) => state.setShowHello);

    function func() {
        togglePower();
        setShowHello(true);
        if (finalExpression != '') clearFinalExpression();
    }

    return (
        // Turn on/off calculator button
        <button className={styles.onoff} onClick={func}>On/Off</button>
    )
}