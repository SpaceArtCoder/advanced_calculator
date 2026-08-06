import styles from "./Operands.module.scss"
import One from "../One/One"
import Two from "../Two/Two"
import Three from "../Three/Three"
import Four from "../Four/Four"
import Five from "../Five/Five"
import Six from "../Six/Six"
import Seven from "../Seven/Seven"
import Eight from "../Eight/Eight"
import Nine from "../Nine/Nine"

export default function Operands() {
    return (
        <div className={styles.operands}>
            <One />
            <Two />
            <Three />
            <Four />
            <Five />
            <Six />
            <Seven />
            <Eight />
            <Nine />
        </div>
    )
}