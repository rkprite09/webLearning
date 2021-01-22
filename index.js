// OPP pillers
// Encapsulation,
// Abstraction,
// Inheritance,
// Polymorphism;
// here is the code below
//   Factory Function
// var arr = [5, 6, 4, 7, 9, 11]
// const printOdds = (arr) => {

var accor = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < accor.length; i++) {
    accor[i].addEventListener('click', function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        };
    })
}
// const getUserChoice = userInput => {
//     var userInput = userInput.toLowerCase();
//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
//         return userInput;
//     } else {
//         console.log('something went wrong')
//     }
// };

// function getComputerChoice() {
//     const randomNum = Math.floor(Math.random() * 3);
//     switch (randomNum) {
//         case 0:
//             return 'rock';
//             break;
//         case 1:
//             return 'paper';
//             break;
//         case 2:
//             return 'scissors'
//             break;
//     }
// };

// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         return 'the game was tie'
//     };
//     if (userChoice === 'rock') {
//         if (computerChoice === 'paper') {
//             return 'The computer won'
//         } else {
//             return 'You won!'
//         };
//     };
//     if (userChoice === 'paper') {
//         if (computerChoice === 'scissors') {
//             return 'The computer won'
//         } else {
//             return 'You won!'
//         }
//     }
//     if (userChoice === 'scissors') {
//         if (computerChoice === 'rock') {
//             return 'The computer won'
//         } else {
//             return 'You won!'
//         }
//     };
//     if (userChoice === 'bomb') {
//         return 'They win'
//     }

// };
// const playGame = () => {
//     const userChoice = getUserChoice('scissors');
//     const computerChoice = getComputerChoice();
//     console.log('You threw: ' + userChoice)
//     console.log('The computer threw: ' + computerChoice);
//     console.log(determineWinner(userChoice, computerChoice))
// };
// playGame()