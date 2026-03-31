card1 = { rank: "Ace", suit: "Hearts" }
card2 = { rank: "7", suit: "Diamonds" }

console.log("You are holding the " + card1.rank + " of " + card1.suit + " and the " + card2.rank + " of " + card2.suit)

card3 = { rank: "King", suit: "Spades" }

deck = [card1, card2, card3]

for (let i = 0; i < deck.length; i++) {
    console.log(deck[i].rank + ' of ' + deck[i].suit)
}


const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

const fulldeck = []

for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
        const card = {
            rank: ranks[j],
            suit: suits[i]
        }
        fulldeck.push(card)
    }
}
console.log(fulldeck);

const newdeck = []

newdeck.push(fulldeck.splice(Math.floor(Math.random() * fulldeck.length), 1))

newdeck.push(fulldeck.splice(Math.floor(Math.random() * fulldeck.length), 1))

console.log(newdeck)
console.log(fulldeck)
