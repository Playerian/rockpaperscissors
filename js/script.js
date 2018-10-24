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
var tempEnrage = false;
var memory = [1, 2, 3];
var lock = false;

// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){

//hide the pics
$(".preHide").hide();

//utility functions 
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$("#shoot").click(function(){
    run();
});

$(document).keydown(function(key){
    if (key.key === "Enter"){
        run();
    }
});

function run(){
    if (lock){
        lock = false;
        cScore = 0;
        uScore = 0;
        $uScore.text("User Score: "+uScore);
        $cScore.text("Comp Score: "+cScore);
        $("#result").text('');
        return;
    }
    var value = $input.val().toLowerCase();
    $input.val('');
    //check enrage
    if (/<script>/g.test(value) || /javascript:/.g){
        enrage = true;
        play(enraging);
        return;
    }
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
    //special inputs
    if (value === "scripted" || value === "codenation"){
        $("#result").text('Computer says: "Thank you for your support!"');
        return;
    }
    if (value === "die"){
        $("#result").text('Computer says: "NO YOU!"');
        return;
    }
    if (value === "fortnite"){
        $("#result").text('Computer says: "this is not supported!"');
        return;
    }
    if (value === "scissor"){
        $("#result").text('Computer says: "That is not scissors! Typo detected"');
        return;
    }
    if (value === "computer"){
        $("#result").text('Computer says: "Do not call me computer"');
        return;
    }
    if (value === "oof"){
        $("#result").text('Computer says: "roblox player detected"');
        return;
    }
    if (value === "javascript" || value === "html" || value === "css"){
        $("#result").text('Computer says: "made by html, css, and javascript"');
        return;
    }
    if (value === "trigger" || value === "trig"){
        $("#result").text('Computer says: "triggered"');
        return;
    }
    if (value.includes("is an invalid input!")){
        $("#result").text('Computer says: "You, sir, is an invalid input."');
        return;
    }
    if (value === "poop" || value === "poo"){
        $("#result").text('Computer says: "this is not edible"');
        return;
    }
    if (value === "chemistry"){
        $("#result").text('Computer says: "what is the matter?"');
        return;
    }
    if (value === "flex" || value === "flexbox"){
        $("#result").text('Computer says: "flexbox is very useful"');
        return;
    }
    if (value === "magic"){
        $("#result").text('Computer says: "magic is everything!"');
        return;
    }
    if (value === "i"){
        $("#result").text('I am not an invalid input, what you typed are.');
        return;
    }
    if (value === "you"){
        $("#result").text('You are an invalid input.');
        return;
    }
    if (value === "memoryclear"){
        $("#result").text('Computer says: "Wait! Dont do it!"');
        memory = [1, 2, 3];
        return;
    }
    //elseelse
    $("#result").text(value +" is an invalid input!");
} 

function play(user){
    //scissor 3
    //paper 2
    //rock 1
    //enrage?
    if (user === enraging){
        $("#result").text('Computer says: "Now I am really mad!"');
        return;
    }
    //computer decides what to play
    var comp;
    if (memory.length === 0){
        comp = randomInt(1,3);
    }else{
        comp = memory[randomInt(0, memory.length - 1)];
    }
    //check enrage
    if (enrage|| tempEnrage ){
        comp = user;
        if (user < 3){
            comp ++;
        }else{
            comp = 1;
        }
        if (tempEnrage){
            if (uScore - 1 === cScore){
                tempEnrage = false;
            }
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
    }else{
        $("#result").text("Computer wins!");
        cScore ++;
    }
    $uScore.text("User Score: "+uScore);
    $cScore.text("Comp Score: "+cScore);
    //memorizing
    if (user < 3){
        memory.push(user + 1);
    }else{
        memory.push(1);
    }
    if (uScore - 3 >= cScore){
        tempEnrage = true;
        $("#result").text("Computer is getting mad!");
    }
    if (uScore >= 20){
        $("#result").text('Congratulation! You win!');
        $("#shoot").text("Restart!");
        lock = true;
    }
    if (cScore >= 20){
        $("#result").text('Sad! The Computer has defeated you!');
        $("#shoot").text("Restart!");
        lock = true;
    }
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

function enraging(){
    enrage = true;
}



























});