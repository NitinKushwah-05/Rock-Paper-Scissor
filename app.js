let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=['Rock','paper','Scissor']
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= `You Win! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.width= "500px";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! Computer ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
        msg.style.width= "500px";

    }
}
const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="Game is Draw Play Again";
    msg.style.backgroundColor="grey";
}
const playGame=(userChoice)=>{
    console.log("User Choice is:",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer Choice is:",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin= compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice === "Scissor" ? false : true;
        }
        else{
            userWin= compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let userChoice= choice.getAttribute("id");
        //console.log("choice clicked is",userChoice);
        playGame(userChoice);
    })
})
