'use client'

import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import { useEffect } from 'react';

export default function OnOff() {

    const togglePower = useCalculatorStore((state) => state.togglePower);

    const toggleShowHello = useCalculatorStore((state) => state.toggleShowHello);

    function func() {
        togglePower();
        toggleShowHello();
    }

    return (
        // Turn on/off calculator button
        <button className={styles.onoff} onClick={func}>On/Off</button>
    )
}