'use client'

import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'

export default function OnOff() {

    const toggleShowHello = useCalculatorStore((state) => state.toggleShowHello);

    return (
        // Turn on/off calculator button
        <button className={styles.onoff} onClick={toggleShowHello}>On/Off</button>
    )
}