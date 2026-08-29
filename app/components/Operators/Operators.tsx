import styles from "./Operators.module.scss"

import Plus from "../Plus/Plus"
import Minus from "../Minus/Minus"
import Multiplication from "../Multiplication/Multiplication"
import Division from "../Division/Division"
import Radical from "../Radical/Radical"

export default function Operators() {

    const signArray = ['+','-','*','/'];
  
    return (
        <div className={styles.operators}>
          {signArray.map((sign, index) => (
          <button key={index} className={styles.signs}>{sign}</button>
          ))}
        </div>
    )
}