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
            targetChars.map((char) => {
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








// 2 + 2 * 2 - 7 + 8 + 79 - 6 / 4 * 3 + 2 / 9 + 2
      
      
 
  
  
//   // Every operator result
//   const operatorResult = [];
  
//   // Every used FinalExpression index
//   const usedIndex = [];
  
//   (let i = 1; i < FinalExpression.length; i = i + 2) {
  
//   	if (FinalExpression[i] == '*' || FinalExpression[i] == '/') {
  	
//   		if (FinalExpression[i] == '*') {
  		
//   			if (!usedIndex.includes(y - 1) && !usedIndex.includes(y + 1)) {
//   				operatorResult.push('' + (+FinalExpression[i - 1]) * (+FinalExpression[i + 1]));
//   				usedIndex[i - 1] = i - 1;
//   				usedIndex[i + 1] = i + 1;
//   			}
  			
//   			else if (!usedIndex.includes(i - 1)) {
  				
//   			}
  			
//   			else if (!usedIndex.includes(i + 1)) {
  			
//   			}
  			
  			
//   		}
  		
//   		else if (FinalExpression[i] == '/') {
//   			operatorResult.push('' + (+FinalExpression[i - 1]) / (+FinalExpression[i + 1]));
//   			usedIndex.push(i - 1);
//   			usedIndex.push(i + 1);
//   		}
  		
//   	}
  	
//   }
  
  
//   (let y = 1; y < FinalExpression.length; y = y + 2) {
  
//   	if (FinalExpression[y] == '+' || FinalExpression[y] == '-') {
  	
//   		if (FinalExpression[y] == '+') {
//   			if (!usedIndex.includes(y - 1) && !usedIndex.includes(y + 1)) {
//   				operatorResult.push('' + (+FinalExpression[y - 1]) + (+FinalExpression[y + 1]));
//   			}
  			
//   			else if (!usedIndex.includes(y - 1)) {
  				
//   			}
  			
//   		}
  		
//   		else if (FinalExpression[y] == '-') {
//   			operatorResult.push('' + (+FinalExpression[y - 1]) - (+FinalExpression[y + 1]));
//   		}
  		
//   	}
//   }
  
  
  
  