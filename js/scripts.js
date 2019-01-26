// function convertNumberToArray(inputNumber) {
//   var numberArray = [];
//   //creating an array containing 0 through to N where N is only known at runtime
//  for (var i = 0; i <= inputNumber; i++)
//   numberArray.push(i);
// }
// function toRange(inputNumber) {
//   var range = [];
//   for (var num = 0; num <= inputNumber; num++) {
//     range += num;
//   }
//   return range;
// }

function beepBoopMachine(inputNumber) {
  var actualNumber = parseInt(inputNumber);
  var machineOutput = [];
  var range = [];
  var exception1 = 0;
  var exception2 = 1;
  var exception3 = 3;
  for (var num = 0; num <= actualNumber; num++) {
    range.push(num);
  }

  range.forEach(function(number) {
      if (number == exception1) {
        machineOutput.push("\"Beep!\"");
      }
      else if (number == exception2) {
        machineOutput.push("\"Boop!\"");
      }
      else if (number % exception3 == 0) {
        machineOutput.push("\"I'm sorry, Dave. I'm afraid I can't do that.\"");
      }
      else {
        machineOutput.push("\"" + number.toString() + "\"");
      }
  });

  return machineOutput;
}



$(document).ready(function() {
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#userInput").val();
    var result = beepBoopMachine(inputNumber);
    // });
    alert(result.join(", "));

    // var inputNumberArray = [];
    // for (var i = 0; i <= N; i++) {
    //   inputNumberArray.push(i);


    //Array.apply(null, {length: inputNumber}).map(Number.call, Number)

  });
});

//1. get inputNumber from userInput
//2. convert to array
//3. loop through the array and output a rang of numbers from 0 to the user inputted.
