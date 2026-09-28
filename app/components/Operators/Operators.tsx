'use client'

import styles from "./Operators.module.scss"
import { useCalculatorStore } from "@/app/store/useCalculatorStore";

export default function Operators() {

    // Arithmetic signs shown on the keyboard
    const signArray = ['+','-','*','/','√'];
    const setFinalExpession = useCalculatorStore((state) => state.setFinalExpression);
    const clearFinalExpression = useCalculatorStore((state) => state.clearFinalExpression);
	const temporaryBuffer = useCalculatorStore((state) => state.temporaryBuffer);
	const setTemporaryBuffer = useCalculatorStore((state) => state.setTemporaryBuffer);
	const clearTemporaryBuffer = useCalculatorStore((state) => state.clearTemporaryBuffer);
    // Contains everything entered by user
    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    // Clear the expression and output the result
    function resultOutput() {

		const expression = stringConverter([...finalExpression, temporaryBuffer]);
        clearFinalExpression();
        calculator(expression);
		clearTemporaryBuffer();

    }

	// Converts numeric strings of the final expression to numbers
	function stringConverter(array: (string | number)[]) {

		// Test code
		// const str = '2+2+7*3/5-3+2*2*2*6-2+√6-9+2';
		// let m = 0;
		// while (m < str.length) {
		// 	array.push(str[m]);
		// 	m++;
		// }
		// array = ['2','+','2','+','7','*','3','/','5','-','3','+','2','*','2','*','2','*','6','-','2','+','','√','6','-','9','+','2'];
		//

		let arr: (string | number)[] = [];
		let i = 0;

		while (i < array.length) {
			if (array[i] != '')  {
				arr = Number(array[i]) ? [...arr, +array[i]] : [...arr, array[i]];
				// if (array[i] == '-' && (i == 0 || array[i - 1] != +array[i - 1])) {
				// 	arr[i] += arr
				// }
			}
			i++;
		}

		return arr;

	}

	function inputCharacters(sign: string) {
		// If a negative number is entered but the temporaryBuffer is empty and the finalExpression's first element is a '-' sign
		if (!temporaryBuffer && (sign == '-') && (finalExpression[0] == '-')) {
			setTemporaryBuffer(sign);
			// To avoid repeating the '-' sign
			return;
		}

		setFinalExpession(temporaryBuffer);
		setFinalExpession(sign);
		// Cleared only if the last number was entered
		if (temporaryBuffer) clearTemporaryBuffer();

	}

    function calculator(finalExpression: (string | number)[]) {

		// Searching for √ operator
		for (let r = 0; r < finalExpression.length; r++) {

        	if (finalExpression[r] == '√') {
				if (finalExpression[r + 1] != '') {
					const rad = Math.sqrt(finalExpression[r + 1] as number);
					finalExpression.splice(r, 1);
					finalExpression[r] = rad;
					r = 0;
				}

				else {
					setFinalExpession('Error');	
					return;
				}
			}
        }

        //Searching for / and * operators
		for (let i = 0; i < finalExpression.length; i++) {

			if (finalExpression[i] == '*') {	
				const mult = (finalExpression[i - 1] as number) * (finalExpression[i + 1] as number);	
				finalExpression.splice(i, 2);	
				finalExpression[i - 1] = mult;	
				i = 0;	
			}
	
			else if (finalExpression[i] == '/') {		
				const dev = (finalExpression[i - 1] as number) / (finalExpression[i + 1] as number);
				finalExpression.splice(i, 2);
				finalExpression[i - 1] = dev;
				i = 0;
			}
		}
			
		// Searching for + and - operators
		for (let m = 0; m < finalExpression.length; m++) {	

			if (finalExpression[m] == '+') {		
				const add = (finalExpression[m - 1] as number) + (finalExpression[m + 1] as number);
				finalExpression.splice(m, 2);
				finalExpression[m - 1] = add;
				m = 0;
			}
				
			else if (finalExpression[m] == '-') {
				const sub = (finalExpression[m - 1] as number) - (finalExpression[m + 1] as number);
				finalExpression.splice(m, 2);
				finalExpression[m - 1] = sub;
				m = 0;
			}
		}
		console.log(finalExpression);
		setFinalExpession(finalExpression);

	} 
  
    return (
        <div className={styles.operators}>
          {signArray.map((sign, index) => (
            <button key={index} className={styles.signs} onClick={() => inputCharacters(sign)}>{sign}</button>
          ))}
          <button className={styles.signs} onClick={resultOutput}>=</button>
        </div>
    )
}