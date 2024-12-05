var colorsDefined = ["green", "red", "yellow","blue"]; //color that are used in Simon Game
var sequence =[]; //Array which will save the sequence of colors
var correct = true; //Variable that will control when game stops

//1-> Green; 2->Red; 3->Yellow; 4->Blue
function randomizerColor(){
    sequence.push(colorsDefined[Math.floor(Math.random()*4 + 1)-1]);
    return  sequence[sequence.lastIndexOf];
}
$(".btn").click(function(event){
    var result = event.hasClass(randomizerColor());
    console.log(sequence[sequence.lastIndexOf]);
});