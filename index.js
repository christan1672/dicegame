function rollDice() {
    // Generate random numbers between 1 and 6 for both players
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Log the random numbers to the console (optional)
    console.log("Player 1: " + randomNumber1);
    console.log("Player 2: " + randomNumber2);

    // Select the <img> elements for the left and right dice
    var leftDiceImage = document.getElementById("leftDice");
    var rightDiceImage = document.getElementById("rightDice");

    // Set the src attribute to the corresponding dice images
    leftDiceImage.src = "images/dice" + randomNumber1 + ".png";
    rightDiceImage.src = "images/dice" + randomNumber2 + ".png";

    // Select the <h1> element
    var heading = document.querySelector("h1");

    // Update the text in the <h1> based on the dice values
    if (randomNumber1 > randomNumber2) {
        heading.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        heading.textContent = "Player 2 Wins! 🚩";
    } else {
        heading.textContent = "It's a Draw!";
    }
}

// Call rollDice when the page loads
rollDice();

// Select the refresh button
var refreshButton = document.getElementById("refreshButton");

// Add a click event listener to the refresh button
refreshButton.addEventListener("click", function() {
    // Reload the page
    rollDice();
});

// Select the restart button
var restartButton = document.getElementById("restartButton");

// Add a click event listener to the restart button
restartButton.addEventListener("click", function() {
    // Reset the game
    rollDice();
});
