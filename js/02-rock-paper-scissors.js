function playGame() {
    let userChoice = prompt('Choose rock, paper or scissor');
    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissor') {
        alert('Please enter the correct option');
    } else {
        let choice;
        let randomNum = Math.floor(Math.random() * 3 + 1); //Generates random number between 1 and 3
        if (randomNum === 1) {
            choice = 'rock';
        } else if (randomNum === 2) {
            choice = 'paper';
        } else {
            choice = 'scissor';
        }
        console.log(`user choice ${userChoice}. Computer choice ${choice}`);
        if (userChoice === choice) {
            alert("Tie");
        }
        else if (userChoice === 'rock') {
            if (choice === 'paper') {
                alert("Computer won");
            } else {
                alert("You won");
            }
        } else if (userChoice === 'scissor') {
            if (choice === 'rock') {
                alert("computer won");
            } else {
                alert("You won");
            }
        } else if (userChoice === 'paper') {
            if (choice === 'scissor') {
                alert("conputer won");
            } else {
                alert("You won");
            }
        }
    }

}
playGame();