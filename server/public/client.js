$(document).ready(goTime);

let buttonClicked = "";
let holdingNumbers = [];

// Create new functions for calculations buttons.
// create seperate button to solve the calculation.
    function goTime(){
      console.log("Let's Roll! 🕺"); 
      $('#add-btn').on('click', newButton)
      $('#minus-btn').on('click', newButton)
      $('#multiply-btn').on('click', newButton)
      $('#divide-btn').on('click', newButton)
      $('#clear-btn').on('click', newButton)
      $('#equal-btn').on('click', solve)
      calculationHistory();
    }


// The newButton function brings in the clicked Id's buttons 
// and reassigned it the variable buttonClicked

    function newButton(){
          if ($(this).attr('id') === "add-btn"){
          buttonClicked = "add-btn";
        }
        else if ($(this).attr('id') == "subtractBtn"){
          buttonClicked = "subtractBtn";
        }
      else if ($(this).attr('id') == "multiplyBtn"){
          buttonClicked = "multiplyBtn";
        }
      else if ($(this).attr('id') == "divideBtn"){
          buttonClicked = "divide"; 
        }
    }

      console.log('show results of buttonClicked', buttonClicked );

// Create an object of the inputs from the inputs field of the calculation
// send the information from the object to the server
    function solve(){
      let valuesObject = {
        num1: $('#first-number').val(),
        num2: $('#second-number').val(),
        button: buttonClicked
      }

  // Push the information from the object into the empty holdingNumbers Array.
  // log it to test it.
      holdingNumbers.push(valuesObject);
      console.log(holdingNumbers);

  // Now, we need to send the information to the server by creating routes
  // Using the Ajax method to send the response. 
  // Check to ensure the response was send without error using .catch.

      $.ajax({
        method: 'POST',
        url:'/values',
        data: valuesObject,
    }).then ( (response) => {
      console.log('POST route /values', response);

  // Ceate function to get results of calculation.
    calcualtionResults();

  // Create function to get the history of all calcualtions.
    calculationHistory();
    }).catch (error => {
      console.log('POST route /values', response);
    });
  }

    


