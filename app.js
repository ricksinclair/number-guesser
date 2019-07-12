// Game Function
// -Player must guess a number between a min and a max
// -Player gets a certain amount of guesses
// -Notify Player of gueses remaining
// -Notify the player of the correct answer if I lose
// -Let player choose to play again
//

// Game values

let min = 1,
  max = 10,
  winningNum = Math.ceil(Math.random() * 10),
  guessesLeft = 3;
console.log(winningNum);
//UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess

guessBtn.addEventListener("click", function(event) {
  event.preventDefault();
  let guess = parseInt(guessInput.value);

  //Validate

  if (isNaN(guess) || guess > min || guess < max) {
    setMessage(`Please enter a number between ${min} and ${max}`);
  }

  if (guess === winningNum) {
    //disable input
    guessInput.disabled = true;

    //change border color
    guessInput.style.borderColor = "green";
    //setMessage

    setMessage(`${winningNum} is correct`, "green");
  } else {
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
