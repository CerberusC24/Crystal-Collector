$(document).ready(function () {

  // create variables to fetch elements off the html page

  var $flavorText = $("#flavor-text");
  var $gameStats = $("#game-stats");
  var $buttonArea = $("#button-area");

  // create golbal variables

  var wins = 0;
  var losses = 0;
  var counter = 0;
  var targetNumber = 0;

  // make a function that sets the parameters for a New Game scenario

  function newGame() {

    // sets running total of user input to 0
    
    counter = 0;

    // Instead of creating a separate array for the range of values for the target and crystals, create variables and use this equation to determine min/max range
    // for this equation, mental note: the number on the outside will always be your minimum. Adding the inside number will be your maximum.

    targetNumber = Math.floor(Math.random() * 50) + 50;

    var goldButtonValue = Math.floor(Math.random() * 1) + 9;

    var whiteButtonValue = Math.floor(Math.random() * 2) + 6;

    var redButtonValue = Math.floor(Math.random() * 2) + 3;

    var blueButtonValue = Math.floor(Math.random() * 1) + 1;

    $gameStats.html(`
    <div class="row text-center">
    <div class="col-12 col-md-6">
    <h4 class="text-light">Coin Amount Offered: <span>${targetNumber}</span></h4>
    <h4 class="text-light">Your Current Appraisal: <span id="counter">${counter}</span></h4>
    </div>
    <div class="col-12 col-md-6">
    <h4 class="text-light">Sales Made: <span>${wins}</span></h4>
    <h4 class="text-light">Disappointed Customers: <span>${losses}</span></h4>
    </div>
    </div>`);

    $flavorText.html(`
    <div class="jumbotron jumbotron-fluid bg-dark text-light text-center p-3">
    <h1>Greetings Prospector!</h1>
    <div class="row">
    <div class="col-12 div-md-6">
    <h4 class="mb-3">I've heard you got some rare jewels in stock. But I have a strict price. Don't try to gauge
    me.</h4>
    <h5 class="text-warning">Instructions:</h5>
    <p class="text-warning">Appraise your crystals to match the patron's offer. But be careful not to overcharge
    or they'll walk.</p>
    <p class="text-warning">Prices for each crystal fluctuate due to supply and demand. Make sure to pay
    attention.</p>
    </div>
    </div>
    </div>`);

    $buttonArea.html(`
    <div class="container-fluid">
    <div class="row mx-auto text-center text-light justify-content-around">
    <div class="card bg-dark border-light" style="width: 18rem;">
    <img class="border" src="assets/images/gold-crystal.png" class="card-img-top" alt="Gold Crystal Image">
    <div class="card-body">
    <h5 class="card-title">The Gilden Crystal</h5>
    <p class="card-text">An extremely valuable crystal of Mythical origins</p>
    <button href="#" class="btn btn-warning text-dark crystal-button btn1" data-crystalvalue = ${goldButtonValue}>Appraise</button>
    </div>
    </div>
    <div class="card bg-dark border-light" style="width: 18rem;">
    <img class="border" src="assets/images/white-crystal.png" class="card-img-top" alt="White Crystal Image">
    <div class="card-body">
    <h5 class="card-title">The Dymund Crystal</h5>
    <p class="card-text">An very Rare radiant gem worth a large amount of coin</p>
    <button href="#" class="btn btn-light text-dark crystal-button  btn2" data-crystalvalue = ${whiteButtonValue}>Appraise</button>
    </div>
    </div>
    <div class="card bg-dark border-light" style="width: 18rem;">
    <img class="border" src="assets/images/red-crystal.png" class="card-img-top" alt="Red Crystal Image">
    <div class="card-body">
    <h5 class="card-title">The Rubee Crystal</h5>
    <p class="card-text">A vibrant Uncommon stone of moderate value</p>
    <button href="#" class="btn btn-danger text-dark crystal-button  btn3" data-crystalvalue = ${redButtonValue}>Appraise</button>
    </div>
    </div>
    <div class="card bg-dark border-light" style="width: 18rem;">
    <img class="border" src="assets/images/blue-crystal.png" class="card-img-top" alt="Blue Crystal Image">
    <div class="card-body">
    <h5 class="card-title">The Safire Crystal</h5>
    <p class="card-text">A Commonplace rock. Not worth very much</p>
    <button href="#" class="btn btn-primary text-dark crystal-button  btn4" data-crystalvalue = ${blueButtonValue}>Appraise</button>
    </div>
    </div>
    </div>
    </div>`);
  }

  newGame();

  $buttonArea.on("click",".crystal-button", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    // write counter to page
    $("#counter").text(counter);

    if (counter == targetNumber) {
      alert("You've Got Yourself a Sale!");
      wins++;
      newGame();

    } else if (counter > targetNumber) {
      alert("No Deal. Consider lowering your prices next time.");
      losses++;
      newGame();

    }

  });

});