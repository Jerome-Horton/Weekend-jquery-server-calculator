$(document).ready(goTime);

function goTime(){
   console.log("Let's Roll!"); 
   $('#equal-btn').on('click', calcNumbers);
}


function calcNumbers(){
    let numbersObject = {
        num1: $('#first-number').val(),
        num2: $('#second-number').val(),
        operator: operator
    }
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: numbersObject,
    }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log('calculation failed', error)
      });
}



