import styles from "./Operators.module.scss"

export default function Operators() {

    const signArray = ['+','-','*','/','√'];
  
    return (
        <div className={styles.operators}>
          {signArray.map((sign, index) => (
          <button key={index} className={styles.signs}>{sign}</button>
          ))}
        </div>
    )
}