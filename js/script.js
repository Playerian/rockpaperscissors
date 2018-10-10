// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
//GLOBAL VARIABLES
var $shoot = $("#shoot");
var $input = $("#input");
var $uChoice = $("#userChoice");
var $uScore = $("#uScore");
var $cScore = $("#cScore");
var uScore = 0;
var cScore = 0;
var enrage = false;

// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){

//utility functions 
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$("#shoot").click(function(){
    run();
});

$(document);

function run(){
    var value = $input.val().toLowerCase();
    $input.val('');
    if (/rock/g.test(value)){
        play(1);
        return;
    }
    if (/paper/g.test(value)){
        play(2);
        return;
    }
    if (/scissors/g.test(value)){
        play(3);
        return;
    }
}

function play(user){
    //scissor 3
    //paper 2
    //rock 1
    //computer decides what to play
    var comp = randomInt(1,3);
    //check enrage
    if (enrage === true){
        comp = user;
        if (user < 3){
            comp ++;
        }else{
            comp = 1;
        }
    }
    //rendering
    $("#userImage").attr("src","image/"+user+".png");
    $("#compImage").attr("src","image/"+comp+".png");
    var result = compare(user,comp);
    if (result === 1){
        $("#result").text("You win!");
        uScore ++;
    }else if(result === 2){
        $("#result").text("It's a draw!");
        cScore ++;
    }else{
        $("#result").text("Computer wins!");
    }
    $uScore.text("User Score: "+uScore);
    $cScore.text("Comp Score: "+cScore);
}

function compare(user, comp){
    //return int
    /*
        1 = win
        2 = draw
        3 = lose
    */
    if (user === comp){
        return 2;
    }
    if (user === 1){
        if (comp === 2){
            return 3;
        }else{
            return 1;
        }
    }
    if (user === 2){
        if (comp === 1){
            return 1;
        }else{
            return 3;
        }
    }
    if (user === 3){
        if (comp === 1){
            return 3;
        }else{
            return 1;
        }
    }
}



























});