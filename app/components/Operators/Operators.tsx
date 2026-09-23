'use client'

import { useState } from "react";
import styles from "./Operators.module.scss"
import { useCalculatorStore } from "@/app/store/useCalculatorStore";


export default function Operators() {
    // Arithmetic signs shown on the keyboard
    const signArray = ['+','-','*','/','√'];
    const setFinalExpession = useCalculatorStore((state) => state.setFinalExpression);
    const clearFinalExpression = useCalculatorStore((state) => state.clearFinalExpression);
	const temporaryBuffer = useCalculatorStore((state) => state.temporaryBuffer);
	const clearTemporaryBuffer = useCalculatorStore((state) => state.clearTemporaryBuffer);
    // Contains everything entered by user
    const finalExpression = useCalculatorStore((state) => state.finalExpression);


    // Clear the expression and output the result
    function resultOutput() {
		// const expression = [...finalExpression, temporaryBuffer];
		const expression = stringConverter([...finalExpression, temporaryBuffer]);
        clearFinalExpression();
        calculator(expression);
		clearTemporaryBuffer();
    }

	// Converts numeric strings of the final expression to numbers
	function stringConverter(array) {
		let arr = [];
		let i = 0;
		while (i < array.length) {
			if (array[i] != ' ')  {
				arr = isNaN(array[i]) ? [...arr, array[i]] : [...arr, +array[i]];
			}
			i++;
		}
		return arr;
	}

	function inputCharacters(sign: string) {
		console.log('buffer ope' + temporaryBuffer);
		setFinalExpession(temporaryBuffer);
		setFinalExpession(sign);
		clearTemporaryBuffer();
	}

    function calculator(finalExpression) {
        //Searching for / and * operators
		for (let i = 0; i < finalExpression.length; i++) {
			if (finalExpression[i] == '*') {	
				let mult = finalExpression[i - 1] * finalExpression[i + 1];	
				finalExpression.splice(i, 2);	
				finalExpression[i - 1] = mult;	
				console.log(finalExpression);	
				i = 0;	
			}
	
			else if (finalExpression[i] == '/') {		
				let dev = finalExpression[i - 1] / finalExpression[i + 1];
				finalExpression.splice(i, 2);
				finalExpression[i - 1] = dev;
				console.log(finalExpression);	
				i = 0;
			}
		}
			
		// Searching for + and - operators
		for (let m = 0; m < finalExpression.length; m++) {	
			if (finalExpression[m] == '+') {		
				let add = finalExpression[m - 1] + finalExpression[m + 1];
				finalExpression.splice(m, 2);
				finalExpression[m - 1] = add;
				console.log(finalExpression);
				m = 0;
			}
				
			else if (finalExpression[m] == '-') {	
				let sub = finalExpression[m - 1] - finalExpression[m + 1];		
				finalExpression.splice(m, 2);
				finalExpression[m - 1] = sub;
				console.log(finalExpression);	
				m = 0;
			}
		}
		return setFinalExpession(finalExpression);
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