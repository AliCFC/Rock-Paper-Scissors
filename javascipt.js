var userScore = 0 ;
var computerScore = 0 ;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result >p");
const all_div = document.getElementById("r");
const two_div = document.getElementById("s");
const five_div = document.getElementById("p");

function getComputerChoice() {
    const choices= ['r','p','s'];
    const rondomNumber=Math.floor(Math.random()*3);
    return choices[rondomNumber] ;
}
function converToText(letter) {
    if (letter==="r") return "Rock";
    if (letter==="p") return  "Paper";
    if (letter==="s") return "Scissors" ;
}
function win(userChoice , computerChoice) {
    const smallUserWord= "User".fontsize(3).sup();
    const smallCompWord= "Computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= `${converToText(userChoice)}${smallUserWord} beats  ${converToText(computerChoice)}${smallCompWord}<br/> You win  <img style="width: 2%" src="pics/Fire3.png" alt="">`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=>
        userChoice_div.classList.remove('green-glow'),1000);
}
function lose(userChoice , computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord = "User".fontsize(3).sup();
    const smallCompWord = "Computer".fontsize(3).sup();
    result_p.innerHTML= `${converToText(userChoice)}${smallUserWord} loses to ${converToText(computerChoice)}${smallCompWord}<br/> You lost   <img style="width: 2%" src="pics/poop.png" alt="">`;
    userChoice_div.classList.add('red-glow');
    setTimeout (()=>
        userChoice_div.classList.remove('red-glow'),1000);
}
function draw(userChoice , computerChoice) {
    const smallUserWord= "User".fontsize(3).sup();
    const smallCompWord= "Computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML= `${converToText(userChoice)}${smallUserWord} equals  ${converToText(computerChoice)}${smallCompWord}<br/> It's a draw... !`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=>
        userChoice_div.classList.remove('gray-glow'),1000);
}
function game(userChoice) {
    const computerChoice =getComputerChoice();
    switch (userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
           win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "rs":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}
function main (){
    all_div.addEventListener('click', ()=>  game("r"));
    two_div.addEventListener('click', ()=> game("s"));
    five_div.addEventListener('click', ()=> game("p"));
}

main();