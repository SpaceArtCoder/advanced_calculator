'use client'

import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import { useEffect } from 'react';

export default function OnOff() {

    const toggleShowHello = useCalculatorStore((state) => state.toggleShowHello);

    const tooglePower = useCalculatorStore((state) => state.togglePower);

    const power = useCalculatorStore((state) => state.power);


    useEffect(() => {
        if (power) toggleShowHello();

    }, [power])

    return (
        // Turn on/off calculator button
        <button className={styles.onoff} onClick={tooglePower}>On/Off</button>
    )
}