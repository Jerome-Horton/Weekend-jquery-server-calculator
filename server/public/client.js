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
      clickedButton = "subtractBtn";
    }
  else if ($(this).attr('id') == "multiplyBtn"){
      clickedButton = "multiplyBtn";
    }
  else if ($(this).attr('id') == "divideBtn"){
      clickedButton = "divide"; 
    }
}

  console.log('show results of Clickedbutton', clickedButton );


