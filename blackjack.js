const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

let wins = 0;
let losses = 0;
let ties = 0;

let deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11];

// Shuffle
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

// Deal
let playerHand = [];
let dealerHand = [];
playerHand.push(deck.pop());
dealerHand.push(deck.pop());
playerHand.push(deck.pop());
dealerHand.push(deck.pop());

function calculateScore(hand) {
  let total = 0;
  for (let i = 0; i < hand.length; i++) {
    total = total + hand[i];
  }
  if (total > 21 && hand.includes(11)) {
    total = total - 10;
  }
  return total;
}

let playerScore = calculateScore(playerHand);
let dealerScore = calculateScore(dealerHand);

function playerTurn() {
  playerScore = calculateScore(playerHand);
  console.log("\nYour hand:", playerHand, "Score:", playerScore);
  console.log("Dealer shows:", dealerHand[0]);
  console.log('Type "hit" or "stand":');

  rl.once("line", function(answer) {
    if (answer === "hit") {
      playerHand.push(deck.pop());
      playerScore = calculateScore(playerHand);

      if (playerScore > 21) {
        console.log("Your hand:", playerHand, "Score:", playerScore);
        console.log("You bust! Dealer wins 😢");
        losses++; // Incremented losses for a bust
        console.log(`--- Score: ${wins} Wins, ${losses} Losses, ${ties} Ties ---`);
        rl.close();
      } else {
        playerTurn();
      }
    } else {
      dealerTurn();
    }
  });
}

function dealerTurn() {
  while (dealerScore < 17) {
    dealerHand.push(deck.pop());
    dealerScore = calculateScore(dealerHand);
    console.log("Dealer hits...");
  }

  console.log("Dealer's hand:", dealerHand, "Score:", dealerScore);

  // --- THE SWITCH STATEMENT ---
  switch (true) {
    case (dealerScore > 21):
      console.log("Dealer busts! You win! 🎉");
      wins++;
      break;
    case (playerScore > dealerScore):
      console.log("You win! 🎉");
      wins++;
      break;
    case (dealerScore > playerScore):
      console.log("Dealer wins 😢");
      losses++;
      break;
    default:
      console.log("It's a tie! 🤝");
      ties++;
      break;
  }

  console.log(`--- Score: ${wins} Wins, ${losses} Losses, ${ties} Ties ---`);
  rl.close();
}

playerTurn();