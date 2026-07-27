import styles from "./Keyboard.module.scss"
import Operators from "../Operators/Operators"
import Operands from "../Operands/Operands"
import Control from "../Control/Control"

export default function Keyboard() {
    return (
        <div className={styles.keyboard}>
            <Operators />
            <Operands />
            <Control />
        </div>
    )
}