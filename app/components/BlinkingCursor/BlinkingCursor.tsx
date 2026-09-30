'use client'

import { useEffect, useState } from 'react'
import styles from './BlinkingCursor.module.scss'

export default function BlinkingCursor() {

    const [visibility, setVisibility] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // Every 0.5 seconds the cursor appears and disappears
            setVisibility((current) => !current)
        }, 500);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <output className={visibility ? styles.visible : styles.hidden}>
            _
        </output>
    )
}