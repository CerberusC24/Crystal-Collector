// create variables to fetch elements off the html page

var $gameInfo = $("#gameInfo");
var $coinAmmount = $("#number-to-match");
var $appraisalValue = $("#appraisalValue");
var $sales = $("#sales");
var $disappointed = $("#disappointed");


var $goldButton = $(".btn1");

var $whiteButton = $(".btn2");

var $redButton = $(".btn3");

var $blueButton = $(".btn4");

$goldButton.addClass("crystal-button");
$whiteButton.addClass("crystal-button");
$redButton.addClass("crystal-button");
$blueButton.addClass("crystal-button");

// create arrays with values for each crystal
// create array with values for the target number

var wins = 0;
var losses = 0;
var counter = 0;

var crystalValuesBlue = [1, 2];
var crystalValuesRed = [3, 4, 5];
var crystalValuesWhite = [6, 7, 8];
var crystalValuesGold = [9, 10];

var compArrayOptions = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];


// make a function that selects a number for each crystal and the target, and starts a new game

function newGame() {

  counter = 0;

  var compIndex = Math.floor(Math.random() * compArrayOptions.length);
  targetNumber = compArrayOptions[compIndex];

  $coinAmmount.text(targetNumber);

  var crystalIndex1 = Math.floor(Math.random() * crystalValuesGold.length);
  goldButtonValue = crystalValuesGold[crystalIndex1];

  var crystalIndex2 = Math.floor(Math.random() * crystalValuesWhite.length);
  whiteButtonValue = crystalValuesWhite[crystalIndex2];

  var crystalIndex3 = Math.floor(Math.random() * crystalValuesRed.length);
  redButtonValue = crystalValuesRed[crystalIndex3];

  var crystalIndex4 = Math.floor(Math.random() * crystalValuesBlue.length);
  blueButtonValue = crystalValuesBlue[crystalIndex4];

  $goldButton.attr("data-crystalvalue", goldButtonValue);
  $whiteButton.attr("data-crystalvalue", whiteButtonValue);
  $redButton.attr("data-crystalvalue", redButtonValue);
  $blueButton.attr("data-crystalvalue", blueButtonValue);

  $("#number-to-guess").text(targetNumber);

  $("#appraisalValue").text(counter);
}

newGame();

$(".crystal-button").on("click", function() {

var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

counter += crystalValue;

$("#appraisalValue").text(counter);

if (counter === targetNumber) {
  alert("You've Got Yourself a Sale!");
  wins++;
  newGame();
  $("#sales").text(wins);
}

else if (counter > targetNumber) {
  alert("No Deal. Consider lowering your prices next time.");
  losses++;
  newGame();
  $("#disappointed").text(losses);

}

});