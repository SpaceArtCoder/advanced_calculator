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

	// stores all the symbols present in the expression
	const signOrder = [];
	
	// stores all the numbers present in the expression
	const numOrder = [];
	
	// stores all the indexes present in the expression
	const usedIndex = [];
	
        function calculator() {
            signArray.map((char) => {
                signOrder[finalExpression.indexOf(char, 0)] = char;  
            })
            
            signOrder.map((char, index) => {
            	switch(char) {
            		case '*':
            		usedIndex.push(index - 1);
            		usedIndex.push(index + 1);
            		numOrder[index - 1] = finalExpression[index - 1];
            		numOrder[index + 1] = finalExpression[index + 1];
            		break;
            		
            		case '/':
            		if (!usedIndex.includes(index - 1)) {
            			numOrder[index - 1] = finalExpression[index - 1];
            		}
            		if (!usedIndex.includes(index + 1)) {
            			numOrder[index + 1] = finalExpression[index + 1];
            		}
            		
            		case '+':
            		if (!usedIndex.includes(index - 1)) {
            			numOrder[index - 1] = finalExpression[index - 1];
            		}
            		if (!usedIndex.includes(index + 1)) {
            			numOrder[index + 1] = finalExpression[index + 1];
            		}
            		
            		case '-':
            		if (!usedIndex.includes(index - 1)) {
            			numOrder[index - 1] = finalExpression[index - 1];
            		}
            		if (!usedIndex.includes(index + 1)) {
            			numOrder[index + 1] = finalExpression[index + 1];
            		}
            		
            		
            	}
            })
        }

        calculator();
})
    

    return (
        // The blinking cursor is displayed only when the field is empty
        <output className={styles.input}>{finalExpression || <BlinkingCursor />}</output>
    )
}



// useEffect(() => {

// 	// stores all the symbols present in the expression
// 	const signOrder = [];
	
// 	// stores all the numbers present in the expression
// 	const numOrder = [];
	
//         function calculator() {
//             signArray.map((char) => {
//                 signOrder[finalExpression.indexOf(char, 0)] = char;  
//             })
            
//             signOrder.map((char, index) => {
//             	switch(char) {
//             		case '*' || '/':
            		
//             		break;
//             	}
//             })
//         }

//         calculator();
// })