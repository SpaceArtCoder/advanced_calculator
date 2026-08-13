import styles from '@/app/components/Keyboard/Keyboard.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'

export default function Zero() {
    return (
        <button className={styles.zero} >0</button>
    )
}