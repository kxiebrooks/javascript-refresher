const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
const names = {1: "Ace", 11: "Jack", 12: "Queen", 13: "King"};
for (const suit of suits) {
  for (let i = 1; i < 14; i++) {
    console.log((names[i] || i) + " of " + suit);
  }
}