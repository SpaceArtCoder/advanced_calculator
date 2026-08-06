import styles from "./Operands.module.scss"
import One from "../One/One"
import Two from "../Two/Two"
import Three from "../Three/Three"
import Four from "../Four/Four"

export default function Operands() {
    return (
        <div className={styles.operands}>
            <One />
            <Two />
            <Three />
        </div>
    )
}