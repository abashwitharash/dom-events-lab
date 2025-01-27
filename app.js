/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target.innerText);
    }); 
});

const calculator = document.querySelector('#calculator')




/*-------------------------------- Variables --------------------------------*/
let firstValue = '';
let secondValue = '';
let operation = '';
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
