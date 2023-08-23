let letUserDecideWinningScore = +prompt("Write Winning Score")

letUserDecideWinningScore = letUserDecideWinningScore ? letUserDecideWinningScore :10;

const newGame = document.querySelector(".new-game")
const rollDiceBtn = document.querySelector(".roll-dice")
const holdBtn = document.querySelector(".hold");

const scorePlayer1 = document.querySelector(".player1-score")

const scorePlayer2 = document.querySelector(".player2-score")

const player1heading = document.querySelector(".heading-1 span")
const player2heading = document.querySelector(".heading-2 span")

let currScorePlayer1 = document.querySelector(".player1-current-score");
 
let currScoreCount = 0

let playerTurn = 1;
let scoreCard;

const currScorePlayer2 = document.querySelector(".player2-current-score")

const diceImg = document.querySelector(".dices img")

let dice ;

let final = [0,0]

let gameStarted = true;

function winnerDecision(n1,n2) {

    document.querySelector(`.player${n2}`).classList.add("winner")
    document.querySelector(`.heading-${n2} span`).textContent = "WINNER";
   document.querySelector(`.heading-${n2} span`).style.color = "red"
    diceImg.style.display = "none"
    document.querySelector(`.heading-${n1} span`).classList.remove("active")
    gameStarted = false;
}

function user1(diceNum) {

    player1heading.classList.add("active")
    player2heading.classList.remove("active")
    scoreCard =  diceNum === 1 ? currScoreCount = 0 :  currScoreCount += diceNum;
    currScorePlayer1.innerHTML = scoreCard;
    
}

function user2(diceNum) {
    player2heading.classList.add("active")
    player1heading.classList.remove("active")
  scoreCard =  diceNum === 1 ? currScoreCount = 0 :  currScoreCount += diceNum;
    currScorePlayer2.innerHTML = scoreCard
   
}

function rollDice() {
    
     dice = Math.floor(Math.random() * 6) + 1
    diceImg.setAttribute("src", `./dices/dice-${dice}.png`)
  
    turn(dice)
  
}

function turn(diceNum) {
    
    if (gameStarted) {

        if (diceNum === 1) {
    
            playerTurn === 1 ? playerTurn = 0 : playerTurn = 1;

            currScorePlayer1.innerHTML = 0
            currScorePlayer2.innerHTML = 0
            currScoreCount = 0

        }

        if (playerTurn === 1) {
       
            user1(diceNum)
     

        } else {
      
            user2(diceNum)
      
        }
   }
}

function hold() {

    if (gameStarted) {

        if (playerTurn === 1) {
            playerTurn = 0
            scorePlayer1.textContent = final[0] += currScoreCount
            user2(dice)
            currScoreCount = 0
            currScorePlayer1.innerHTML = 0
            currScorePlayer2.innerHTML = 0
        
        } else {
            playerTurn = 1
            scorePlayer2.textContent = final[1] += currScoreCount
            user1(dice)
            currScoreCount = 0
            currScorePlayer1.innerHTML = 0
            currScorePlayer2.innerHTML = 0
    

        }

        if (final[0] >= letUserDecideWinningScore) {

            winnerDecision(2,1)

        }
        if (final[1] >= letUserDecideWinningScore) {

            winnerDecision(1,2)
       
        }   
    }    
}

function start() {
    gameStarted = true;
    diceImg.style.display = "block"
    document.querySelector(".player1").classList.remove("winner");
    document.querySelector(".player2").classList.remove("winner");
    player1heading.textContent = "";
    player2heading.textContent = "";
    currScoreCount = 0;
    currScorePlayer1.innerHTML = 0;
    currScorePlayer2.innerHTML = 0;
    final[0] = 0;
    final[1] = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
}

holdEvent = holdBtn.addEventListener("click",hold)

diceEvent = rollDiceBtn.addEventListener("click", rollDice)

newGame.addEventListener("click",start)



