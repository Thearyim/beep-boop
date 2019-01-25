$(document).ready(function() {
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#userInput").val();
    Array.apply(null, {length: inputNumber}).map(Number.call, Number)
    alert();
  });
});

//1. get inputNumber from userInput
//2. convert to array
//3. loop through the array and output a rang of numbers from 0 to the user inputted.
