console.log('Server is working!');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let calculationArray=[];
let historyArray = [];

let sum = 0;


// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.post('/values', (req, res) =>{
      console.log('req is', req.body);
      // calculationArray.push(req.body);
      // historyArray = [];
      solvingMath(req.body);
      console.log(calculationArray);
      res.sendStatus(201);
});
app.get('/history', (req, res) => {
    console.log('history path', req.route.path);
    // solvingMath();
    res.send(historyArray);
 });
 //sending MathInputs to the GET function on the client side.
      app.get('/results', (req, res) =>{
      console.log('results path', req.route.path);

//it's being sent here.
     res.send(calculationArray);
});

// create a function for if's conditional

  function solvingMath(aNumber){ 
      // for (let aNumber of calculationArray){
     
        let fullSolve = {
          // sum: sum,
          num1: aNumber.num1,
          num2: aNumber.num2,
          numBtn: aNumber.button
        }
      if (aNumber.button === "add-btn") {
         fullSolve.sum = Number(aNumber.num1) + Number(aNumber.num2);
          calculationArray.push(fullSolve.sum);

    }
      else if (aNumber.button === "minus-btn") {
       fullSolve.sum = Number(aNumber.num1) - Number(aNumber.num2);
          calculationArray.push(fullSolve.sum);
    }
      else if (aNumber.button === "multiply-btn") {
       fullSolve.sum = Number(aNumber.num1) * Number(aNumber.num2);
          calculationArray.push(fullSolve.sum);
    }
      else if (aNumber.button === "divide-btn") {
       fullSolve.sum = Number(aNumber.num1) / Number(aNumber.num2);
          calculationArray.push(fullSolve.sum);
    }
      historyArray.push(fullSolve);
  }
      console.log(historyArray);
      console.log(calculationArray);
// }

    app.listen(PORT, (res) => {
      console.log('listening on port', PORT)
});