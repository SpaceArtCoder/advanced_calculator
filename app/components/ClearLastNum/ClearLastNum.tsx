import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import styles from '../Keyboard/Keyboard.module.scss'

export default function ClearLastNum() {

	const clearTemporaryBuffer = useCalculatorStore((state) => state.clearTemporaryBuffer)

	return (
		<button className={styles.clearLastNum} onClick={() => clearTemporaryBuffer()}>&#11013;</button>
	)
}