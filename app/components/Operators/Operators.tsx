'use client'

import styles from "./Operators.module.scss"
import { useCalculatorStore } from "@/app/store/useCalculatorStore";


export default function Operators() {
    
    // Arithmetic signs shown on the keyboard
    const signArray = ['+','-','*','/','√'];

    const setFinalExpession = useCalculatorStore((state) => state.setFinalExpression);
    
    const clearFinalExpression = useCalculatorStore((state) => state.clearFinalExpression);

    // Contains everything entered by user
    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    // Clear the expression and output the result
    function resultOutput() {
        clearFinalExpression();
        calculator();
    }


    function calculator() {

        // Used operand index
	    const usedIndex = [];
	    // Used operator index and results
	    const results = new Map();

			//Searching for / and * operators
            for (let i = 1; i < finalExpression.length; i = i + 2) {

				if (finalExpression[i] == '*') {
		
					if (!usedIndex.includes(i - 1) && !usedIndex.includes(i + 1)) {
			
						// Mark used operand index
						usedIndex.push(i - 1);
						usedIndex.push(i + 1);
			
						// Mark used operator index and its result
						results.set(i, finalExpression[i - 1] * finalExpression[i + 1]);

                        console.log(finalExpression[i-1] * finalExpression[i+1]);

                        if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(i));
			
					}
		
					else if (!usedIndex.includes(i - 1)) {
		
						usedIndex.push(i - 1);
			
						results.set(i, finalExpression[i - 1] * results.get(i + 2));

                        if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(i));
		
					}
		
					else if (!usedIndex.includes(i + 1)) {
		
						usedIndex.push(i + 1);
		
						results.set(i, results.get(i - 2) * finalExpression[i + 1]);

                        if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(i));
		
					}
		
					else {
		
						results.set(i, results.get(i - 2) * results.get(i + 2));

                        if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(i));
		
					}
		
				}
	
	
				else if (finalExpression[i] == '/') {
		
					// If the both operands are available
					if (!usedIndex.includes(i - 1) && !usedIndex.includes(i + 1)) {
			
						usedIndex.push(i - 1);
						usedIndex.push(i + 1);
			
						results.set(i, finalExpression[i - 1] / finalExpression[i + 1]);

                        if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(i));
			
					}
		
					// If first operand is available
					else if (!usedIndex.includes(i - 1)) {
		
						usedIndex.push(i - 1);
			
						results.set(i, finalExpression[i - 1] / results.get(i + 2));

                        if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(i));
			
		
					}
		
					// If second operand is available
					else if (!usedIndex.includes(i + 1)) {
		
						usedIndex.push(i + 1);
			
						results.set(i, results.get(i - 2) / finalExpression[i + 1]);

                        if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(i));
		
					}
		
					// If all operands are used
					else {
			
						results.set(i, results.get(i - 2) / results.get(i + 2));

                        if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(i));
		
					}
		
				}
	
			}


			//Searching for + and - operators
			for (let m = 1; m < finalExpression.length; m = m + 2) {

				if (finalExpression[m] == '+') {
		
					if (!usedIndex.includes(m - 1) && !usedIndex.includes(m + 1)) {
			
						// Mark used operand index
						usedIndex.push(m - 1);
						usedIndex.push(m + 1);
			
						// Mark used operator index and its result
						results.set(m, +finalExpression[m - 1] + +finalExpression[m + 1]);

						// Check for the last operator that have to return the final result
						if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(m));
		
					}
		
					else if (!usedIndex.includes(m - 1)) {
		
						usedIndex.push(m - 1);
			
						results.set(m, +finalExpression[m - 1] + results.get(m + 2));

						if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(m));
		
					}
		
					else if (!usedIndex.includes(m + 1)) {
		
						usedIndex.push(m + 1);
		
						results.set(m, results.get(m - 2) + +finalExpression[m + 1]);

						if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(m));
		
					}
		
					else {
		
						results.set(m, results.get(m - 2) + results.get(m + 2));

						if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(m));
		
					}
		
				}
	
				else if (finalExpression[m] == '-') {
		
					// If the both operands are available
					if (!usedIndex.includes(m - 1) && !usedIndex.includes(m + 1)) {
			
						usedIndex.push(m - 1);
						usedIndex.push(m + 1);
			
						results.set(m, finalExpression[m - 1] - finalExpression[m + 1]);

						if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(m));

					}
		
					// If first operand is available
					else if (!usedIndex.includes(m - 1)) {
			
						usedIndex.push(m - 1);
			
						results.set(m, finalExpression[m - 1] - results.get(m + 2));

						if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(m));
		
					}
		
					// If second operand is available
					else if (!usedIndex.includes(m + 1)) {
		
						usedIndex.push(m + 1);
			
						results.set(m, results.get(m - 2) - finalExpression[m + 1]);

						if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(m));
		
					}
		
					// If all operands are used
					else {
			
						results.set(m, results.get(m - 2) - results.get(m + 2));

						if (results.size == (finalExpression.length - 1) / 2 ) return setFinalExpession(results.get(m));
		
					}
		
				}

			}

        }
  
    return (
        <div className={styles.operators}>
          {signArray.map((sign, index) => (
            <button key={index} className={styles.signs} onClick={() => setFinalExpession(sign)}>{sign}</button>
          ))}
          <button className={styles.signs} onClick={resultOutput}>=</button>
        </div>
    )
}