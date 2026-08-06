import styles from "./Operands.module.scss"
import One from "../One/One"
import Two from "../Two/Two"

export default function Operands() {
    return (
        <div className={styles.operands}>
            <One />
            <Two />
        </div>
    )
}