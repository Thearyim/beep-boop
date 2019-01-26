function getRange(number) {
  var range = [];
  for (var num = 0; num <= number; num++) {
    range.push(num);
  }
  return range;
}

function getStringArray(number) {
  var stringArray = number.toString().split("");
  return stringArray;
}

function beepBoopMachine(inputNumber) {
  var actualNumber =  parseInt(inputNumber);
  var machineOutput = [];
  var range = getRange(actualNumber);
  // Find highest priority in the range
  // 10 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // loop through each number in range and check for exceptions
  // exception 1 == number contains 0
  // exception 2 == number contains 1
  // exception 3 == number is divisible by 3
  // Exceptions must be checked in order (i.e. exception 3, then 2, then 1)
  // forEach item;
  // If number divisible by 3, apply exception 3
  // else, apply the following algorithm:
  //  convert the number to array of strings
  //  if array of strings contain "1", apply exception 2
  //  if array of strings contain "0", apply exception 1
  //  else, show the number as is
  range.forEach(function(number) {
    if (number != 0 && number != 1 && number % 3 == 0) {
      //apply exception 3
      machineOutput.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else {
      var stringArray = getStringArray(number);
      if (stringArray.includes("1")) {
        //apply exception 2
        machineOutput.push("Boop!");
      }
      else if (stringArray.includes("0")) {
        //apply exception 1
        machineOutput.push("Beep!");
      }
      else {
        //  leave the number as is
        machineOutput.push(number.toString());
      }
    }
  });

  return machineOutput;
}

$(document).ready(function() {
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#userInput").val();
    var result = beepBoopMachine(inputNumber);
    $("#beepBoopResult").text(result);
    $("form#beepBoopForm").hide();
    $("#result").show();
  });
});

$(document).ready(function() {
  $("#result").hide();
    $("button#refreshPage").click(function() {
      location.reload();
  });
});

//1. get inputNumber from userInput
//2. convert to array
//3. loop through the array and output a rang of numbers from 0 to the user inputted.
