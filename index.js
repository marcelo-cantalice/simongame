var baseColors = ["green", "red", "yellow", "blue"];
var randomColors = [];
var userClick = [];
var gameStarted = false;
var score = 0;
var controllerLevel = 0;

//Start the Game
$(document).keypress(function (event) {
  if (!gameStarted) {
    if(event.key==="r"){
       location.reload();
    }
    randomColors = []; // reset random colors
    score = 0; //reset score
    controllerLevel = 0;
    gameStarted = true;
    console.log("<-----gameStarted------>");
    randomizeColor();
  }else{
    $(document).off("keypress");
  }

});

//Get the click on Button
$(".btn").click(function (btClicked) {
  if (gameStarted === true) {
    var colorBtn = btClicked.currentTarget.id;
    flashColor(colorBtn);
    userClick.push(colorBtn);
    checkAnswer(userClick.length - 1);
  }
});

//Function to Randomize a  value and add
//0->Green; 1->Red; 2-> Yellow; 3-> Blue
function randomizeColor() {
  userClick = [];
  controllerLevel++;
  $("h1").text("Level " + controllerLevel);
  var randomValue = Math.floor(Math.random() * baseColors.length); //Randomize a number
  var newColor = baseColors[randomValue]; //Get a Color in baseColors according the randomValue
  randomColors.push(newColor); //Add the color in randomColors
  flashColor(newColor);
  console.log(randomColors);
}
//Flash the button and Play the sound
function flashColor(color) {
  //flash color
  $("." + color).addClass("pressed");

  setTimeout(function () {
    $("." + color).removeClass("pressed");
  }, 100);
  //play sound
  var soundPath = `./sounds/${color}.mp3`;
  var audio = new Audio(soundPath);
  audio.play();
}

//Fucntion to check the Answer
function checkAnswer(positionColor) {
  if (userClick[positionColor] === randomColors[positionColor]) {
    if (userClick.length === randomColors.length) {
      score++;
      //Next Lvel
      console.log("Next Level");
      setTimeout(function () {
        randomizeColor();
      }, 1000);
    }
  } else {
    $("h1").text(
      "You Lost! Your Score is " + score + ". Press R to start again!"
    );
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $(".btn").off("click");
    $(document).on("keypress");
    gameStarted = false;
    
  }
}
