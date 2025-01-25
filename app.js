/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
     
      console.log(event.target.innerText);
 
    });
  });

  const calculator = document.querySelector('#calculator');

  

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
