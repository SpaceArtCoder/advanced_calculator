'use client'

import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'

export default function OnOff() {

    const togglePower = useCalculatorStore((state) => state.togglePower);

    const setShowHello = useCalculatorStore((state) => state.setShowHello);

    function func() {
        togglePower();
        setShowHello(true);
    }

    return (
        // Turn on/off calculator button
        <button className={styles.onoff} onClick={func}>On/Off</button>
    )
}