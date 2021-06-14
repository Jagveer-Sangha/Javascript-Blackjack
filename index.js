
let player = {
    name: "per",
    chip: 200
}
let cards = [firstcard, secondcard] // array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Elements from within the document
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chip

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    // J, Q, K return 10
    // A returns 11 everytime ---> Add functionality to ask user whether they want it to be 1 or 11
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

    // Invokes the renderGame function
    function startGame() {
        isAlive = true
        let firstcard = getRandomCard()
        let secondcard = getRandomCard()
        cards = [firstcard, secondcard]
        sum = firstcard + secondcard
        // Generates two random numbers
        renderGame()

    }

    function renderGame() {
        cardEl.textContent = "Cards: "

        // Renders out all the cards instead of just two
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " "
        }

        sumEL.textContent = "Sum: " + sum
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of the game!"
            isAlive = false
        }

        messageEL.textContent = message
    }

    function newCard() {
        // Only allow the player to get a new card if  ISalive and does NOT have Blackjack
        if (isAlive === true && hasBlackJack === false) {
            let card = getRandomCard()
            sum += card
            cards.push(card)
            renderGame()
        }
    }
}