/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator')

const totalDisplay = document.querySelector('.display');
totalDisplay.innerText = 0;  // displays 0 as default 

/*-------------------------------- Variables --------------------------------*/
let firstValue = '';  //starting with empty strings so users can choose 
let secondValue = '';
let operation = '';
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', ({target}) => {
    const buttonText = target.innerText;

    if (target.classList.contains('button')) { // really hope this is right
        if (buttonText === 'C') {
            firstValue = '';
            secondValue = ''; 
            operation = '';
            totalDisplay.innerText = 0;
        } else if (buttonText === '=') {
                if (firstValue !== '' && secondValue !== '' && operation !== '') {
                    calculate();
                }
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            if (firstValue !== '') {
                if (secondValue !== '') {
                    calculate();
                }
                operation = buttonText;
                secondValue = firstValue;
                firstValue = '';
            }
        } else {
            firstValue += buttonText;
            totalDisplay.innerText = firstValue;
        }
    }
});

/*-------------------------------- Functions --------------------------------*/
const calculate = () => {
    let result;
    const first = parseFloat(firstValue); //had to google how to convert strings to numbers 
    const second = parseFloat(secondValue);

 if (operation === '-') {
    result = second - first;
 } else if (operation === '+') {
    result = second + first;
 } else if (operation === '/') {   //adding the functions was simpler but damn was hard 
    result = second / first; 
 } else if (operation === '*') {
    result = second * first;
 }
 
 totalDisplay.innerText = result;
  firstValue = result.toString();  // had to get help here with students and google...
  secondValue = '';
  operation = '';
 };
  
 //took me 10 hours to complete - feels like I was unprepared for this. 