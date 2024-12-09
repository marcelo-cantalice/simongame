var colorsDefined = ["green", "red", "yellow", "blue"]; //color that are used in Simon Game
var sequenceRandom = []; //Array which will save the sequenceRandom of colors
var score = 0; //How many points the  player has

//1-> Green; 2->Red; 3->Yellow; 4->Blue
function randomizeColor() {
  //randomize color
  sequenceRandom.push(colorsDefined[Math.floor(Math.random() * 4 + 1) - 1]);
  $("h1").text("Level  " + sequenceRandom.length);
  setTimeout(flashColor(sequenceRandom[sequenceRandom.length - 1]), 300);
  console.log(sequenceRandom[sequenceRandom.length - 1]);
  return sequenceRandom[sequenceRandom.length - 1];
}

function flashColor(color) {
  /* for (let index = 0; index < sequenceRandom.length; index++) {
    const element = sequenceRandom[index];
    
  }*/
  //flash color
  $("." + color).addClass("pressed");
  setTimeout(function () {
    $("." + color).removeClass("pressed");
  }, 100);
  //play sound
}
function startGame() {
  $("body").on("keypress", function (event) {
    if (event.key === "a") {
      console.log("<---------------Game Started--------------->");
      var randomized = randomizeColor();

      //console.log(randomized);
      var userChoice;
      $(".btn").click(function (event) {
        // randomized = randomizeColor();
        //flashColor(randomized);
        //change h1 to "Level Score"
        //$("h1").text("Level  " + sequenceRandom.length);
        //console.log(randomized);
        userChoice = event.currentTarget.classList;
        flashColor(userChoice[1]);
        if (userChoice.contains(randomized)) {
          score++;
          setTimeout(function () {
            randomized = randomizeColor();
          }, 500);
          $("h1").text("Level  " + sequenceRandom.length);
          // randomized = randomizeColor();
          //console.log(randomized);
          console.log("My score is " + score);
        } else {
          $("h1").text(
            "You Lost! Your Score is " + score + ". Press A to start again!"
          );
          $("body").addClass("game-over");
          $(".btn").off("click");
          score = 0;
          sequenceRandom = [];
          $("body").on("keypress", function (event) {
            if (event.key === "a") {
              $("body").removeClass("game-over");
              //startGame();
            }
          });
          console.log(event.key);
        }

        //console.log(event.currentTarget.classList.contains(randomized));
        //randomizeColor();
      });
    }
  });
}
startGame();
