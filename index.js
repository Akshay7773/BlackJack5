
let num1 = 0
let num2 = 0

let myArray = []

let sum = 0
let cardsEl = document.getElementById("cards-el")

let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let message = ""

let isAlive = true
let hasBlackJack = false
function startgame()
 {
        if (myArray == "") 
        {
            num1 = randomValue()
            num2 = randomValue()
            myArray.push(num1)
            myArray.push(num2)
            sum = num1 + num2

        }
        cardsEl.textContent = "Cards: "
        for (let i = 0; i < myArray.length; i++) 
        {
            cardsEl.textContent += myArray[i] + " "
        }

        sumEl.textContent = "Sum: " + sum

        if (sum < 21) {
            message = "Do u want to draw a new card?"
        }
        else if (sum === 21) {
            message = "You have a BlackJack!!!!"
            hasBlackJack = true
        }
        else {
            message = "You are out of the Game!!"
            isAlive = false
        }
        messageEl.textContent = message
    
}

function newcard()
 {
    if (isAlive === true && hasBlackJack === false) {
        let num3 = randomValue()
        myArray.push(num3)
        sum += num3
        startgame()
    }
}

//creating randomValue() function

function randomValue() {
    return Math.floor(Math.random() * 12) + 1
}

//restart the game()

function restart() {
    myArray = []
    sumEl.textContent = "Sum: "
    
    cardsEl.textContent = "Cards: "
    messageEl.textContent = "Want to play round?"
    isAlive = true
    hasBlackJack = false

}
