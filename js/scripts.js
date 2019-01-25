// function convertNumberToArray(inputNumber) {
//   var numberArray = [];
//   //creating an array containing 0 through to N where N is only known at runtime
//  for (var i = 0; i <= inputNumber; i++)
//   numberArray.push(i);
// }
function toRange(inputNumber) {
  var range = [];
  for (var num = 0; num <= inputNumber; num++) {
    range += num;
  }
  return range;
}

function beepBoopMachine(range) {
  var machineOutput;
  var exception1 = ["0"];
  var exception2 = ["1"];
  var exception3 =  ["3"];

  if (exception1.includes(range)) {
    machineOutput = number + "Beep!";
  }
  else if (exception2.includes(range)) {
    machineOutput = number + "Boop!";
  }
  else if (exception3.includes(range)) {
    machineOutput = number + "I'm sorry, Dave. I'm afraid I can't do that.";
  }

}

// function toRange(inputNumber) {
//   var range = [];
//   for (var num = 0; num <= inputNumber; num++) {
//     if ()
//     range += num;
//   }
//
//   return range;
// }

$(document).ready(function() {
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#userInput").val();
    var numberRangeArray = [];
    inputNumber.forEach(function(inputNumber) {
      numberRangeArray.push(beepBoopMachine(inputNumber));
    });
    console.log(numberRangeArray);

    // var inputNumberArray = [];
    // for (var i = 0; i <= N; i++) {
    //   inputNumberArray.push(i);


    //Array.apply(null, {length: inputNumber}).map(Number.call, Number)

  });
});

//1. get inputNumber from userInput
//2. convert to array
//3. loop through the array and output a rang of numbers from 0 to the user inputted.
