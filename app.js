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
