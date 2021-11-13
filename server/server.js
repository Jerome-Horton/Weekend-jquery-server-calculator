const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let calculationArray=[];


// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.get('calculate', (req,res) => {
    res.send('hey express');
    solvingArray();
    res.send(solvingArray);
});

app.post('/calculate', (req,res) => {
    console.log("show calculation:", req.body);
    calculationArray.push(req.body)
    console.log(calculationArray);
    res.send(201);
  });

// create a function for if's conditional

function solvingArray(){
    for (let solving of calculationArray){
      if(solving.operator  === '+'){
        solving.answer = Number(items.numOne) + Number(items.numTwo);
      }else if (solving.operator  === '-'){
        solving.answer = Number(items.numOne) - Number(items.numTwo);
      }else if (solving.operator === '*'){
        solving.answer = Number(items.numOne) * Number(items.numTwo);
      }else if (solving.operator === '/'){
        solving.answer = Number(items.numOne) / Number(items.numTwo);
    };
   }
    console.log(calculationArray);
   console.log(calculationProblem);
   };




app.listen(5000, (res) => {
    console.log('listening on port', PORT)
});