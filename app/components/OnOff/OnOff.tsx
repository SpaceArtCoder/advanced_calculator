'use client'

import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'

export default function OnOff() {

    const toggleShowHello = useCalculatorStore((state) => state.toggleShowHello);

    const tooglePower = useCalculatorStore((state) => state.togglePower)

    return (
        // Turn on/off calculator button
        <button className={styles.onoff} onClick={tooglePower}>On/Off</button>
    )
}