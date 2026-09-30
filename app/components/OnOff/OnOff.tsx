'use client'

import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'

export default function OnOff() {

    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    const clearFinalExpression = useCalculatorStore((state) => state.clearFinalExpression);

    const clearTemporaryBuffer = useCalculatorStore((state) => state.clearTemporaryBuffer);

    const togglePower = useCalculatorStore((state) => state.togglePower);

    const temporaryBuffer = useCalculatorStore((state) => state.temporaryBuffer);

    const setShowHello = useCalculatorStore((state) => state.setShowHello);

    // Pressing the On/Off button clears the old values
    function initialFinalClearing() {

        togglePower();
        setShowHello(true);

        // Clears the fields if they are not empty
        if (finalExpression.length || temporaryBuffer) {
            clearFinalExpression();
            clearTemporaryBuffer();
        }
    }

    return (
        // Turn on/off calculator button
        <button className={styles.onoff} onClick={initialFinalClearing}>On/Off</button>
    )
}