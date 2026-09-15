import styles from './FinalExpression.module.scss'
import { useCalculatorStore } from '@/app/store/useCalculatorStore'
import BlinkingCursor from '@/app/components/BlinkingCursor/BlinkingCursor'
import { useEffect } from 'react';


export default function FinalExpression() {

    // Search characters
    const targetChars = ['*', '/', '+', '-'];

    

    // Contains everything entered by user
    const finalExpression = useCalculatorStore((state) => state.finalExpression);

    useEffect(() => {

	// // stores all the symbols present in the expression
	// const signOrder = [];
	
	// // stores all the numbers present in the expression
	// const numOrder = [];
	
	// // stores all the indexes present in the expression
	// const usedIndex = [];

		// Used operand index
		const usedIndex = [];

		// Used operator index and results
		const results = new Map();

	
        function calculator() {

			//Searching for / and * operators
            for (let i = 1; i < finalExpression.length; i = i + 2) {

				if (finalExpression[i] == '*') {
		
					if (!usedIndex.includes(i - 1) && !usedIndex.includes(i + 1)) {
			
						// Mark used operand index
						usedIndex.push(i - 1);
						usedIndex.push(i + 1);
			
						// Mark used operator index and its result
						results.set(i, finalExpression[i - 1] * finalExpression[i + 1]);
			
					}
		
					else if (!usedIndex.includes(i - 1)) {
		
						usedIndex.push(i - 1);
			
						results.set(i, finalExpression[i - 1] * results.get(i + 2));
		
					}
		
					else if (!usedIndex.includes(i + 1)) {
		
						usedIndex.push(i + 1);
		
						results.set(i, results.get(i - 2) * finalExpression[i + 1]);
		
					}
		
					else {
		
						results.set(i, results.get(i - 2) * results.get(i + 2));
		
					}
		
				}
	
	
				else if (finalExpression[i] == '/') {
		
					// If the both operands are available
					if (!usedIndex.includes(i - 1) && !usedIndex.includes(i + 1)) {
			
						usedIndex.push(i - 1);
						usedIndex.push(i + 1);
			
						results.set(i, finalExpression[i - 1] / finalExpression[i + 1]);
			
					}
		
					// If first operand is available
					else if (!usedIndex.includes(i - 1)) {
		
						usedIndex.push(i - 1);
			
						results.set(i, finalExpression[i - 1] / results.get(i + 2));
			
		
					}
		
					// If second operand is available
					else if (!usedIndex.includes(i + 1)) {
		
						usedIndex.push(i + 1);
			
						results.set(i, results.get(i - 2) / finalExpression[i + 1]);
		
					}
		
					// If all operands are used
					else {
			
						results.set(i, results.get(i - 2) / results.get(i + 2));
		
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
						results.set(m, finalExpression[m - 1] + finalExpression[m + 1]);

						// Check for the last operator that have to return the final result
						if (results.size == (finalExpression.length - 1) / 2 ) return results.get(m);
		
					}
		
					else if (!usedIndex.includes(m - 1)) {
		
						usedIndex.push(m - 1);
			
						results.set(m, finalExpression[m - 1] + results.get(m + 2));

						if (results.size == (finalExpression.length - 1) / 2 ) return results.get(m);
		
					}
		
					else if (!usedIndex.includes(m + 1)) {
		
						usedIndex.push(m + 1);
		
						results.set(m, results.get(m - 2) + finalExpression[m + 1]);

						if (results.size == (finalExpression.length - 1) / 2 ) return results.get(m);
		
					}
		
					else {
		
						results.set(m, results.get(m - 2) + results.get(m + 2));

						if (results.size == (finalExpression.length - 1) / 2 ) return results.get(m);
		
					}
		
				}
	
				else if (finalExpression[m] == '-') {
		
					// If the both operands are available
					if (!usedIndex.includes(m - 1) && !usedIndex.includes(m + 1)) {
			
						usedIndex.push(m - 1);
						usedIndex.push(m + 1);
			
						results.set(m, finalExpression[m - 1] - finalExpression[m + 1]);

						if (results.size == (finalExpression.length - 1) / 2 ) return results.get(m);

					}
		
					// If first operand is available
					else if (!usedIndex.includes(m - 1)) {
			
						usedIndex.push(m - 1);
			
						results.set(m, finalExpression[m - 1] - results.get(m + 2));

						if (results.size == (finalExpression.length - 1) / 2 ) return results.get(m);
		
					}
		
					// If second operand is available
					else if (!usedIndex.includes(m + 1)) {
		
						usedIndex.push(m + 1);
			
						results.set(m, results.get(m - 2) - finalExpression[m + 1]);

						if (results.size == (finalExpression.length - 1) / 2 ) return results.get(m);
		
					}
		
					// If all operands are used
					else {
			
						results.set(m, results.get(m - 2) - results.get(m + 2));

						if (results.size == (finalExpression.length - 1) / 2 ) return results.get(m);
		
					}
		
				}

			}

        }

        calculator();

	});
    

    return (
        // The blinking cursor is displayed only when the field is empty
        <output className={styles.input}>{finalExpression || <BlinkingCursor />}</output>
    )
}