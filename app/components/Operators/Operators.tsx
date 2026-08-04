import styles from "./Operators.module.scss"
import Plus from "../Plus/Plus"
import Minus from "../Minus/Minus"
import Multiplication from "../Multiplication/Multiplication"

export default function Operators() {
    return (
        <div className={styles.operators}>
            <Plus />
            <Minus />
            <Multiplication />
        </div>
    )
}