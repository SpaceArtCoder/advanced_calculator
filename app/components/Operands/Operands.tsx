import styles from "./Operands.module.scss"

export default function Operands() {
    return (
        <div className={styles.operands}>
            {[1,2,3,4,5,6,7,8,9,0].map((num) => (
                <button key={num} className={styles.numbers}>{num}</button>
            ))}
        </div>
    )
}