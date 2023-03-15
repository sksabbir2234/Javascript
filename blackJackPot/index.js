
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


// let sumEl = document.querySelector("#sum-el")

let player ={
    name : "Sabbir",
    chips: 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name+" : $"+player.chips

function getRandom(){
   let randNum = (Math.random() *13)+1
   let roundNum = Math.floor(randNum)
    
   if (roundNum > 10){
    return 10
   }else if(roundNum === 1){
    return 11
   }else{
    return roundNum
   }
   return  roundNum
}

function startGame(){
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    let cards = [firstCard,secondCard]
    let sum = firstCard + secondCard 
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: " 
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] +" "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message= "Do you want to draw a new card? "
    } else if (sum === 21) {
         message= "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
         message= "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message


}

function newCard(){
    if(isAlive == true && hasBlackJack == false){
        console.log("Drawing a new cards from deck")
        let thirdCard  = getRandom()
        sum += thirdCard
        cards.push(thirdCard)
        
        renderGame()
    

    }
  
}


