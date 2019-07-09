let maxPrize = 100;
let attempt = 8;
let totalPrize = 0;
let result = confirm('Do you want to play a game?');

if (result === false) {
    alert('You did not become a millionaire, but can.');
} else {
    startGame(maxPrize, attempt, totalPrize);
}
/*eslint no-magic-numbers: ["error", { "ignore": [0,1,2,3,4] }]*/
function startGame(maxPrize, range, totalSum) {
    let randNum = Math.floor(Math.random() * (range + 1));
    console.log(randNum);
    let currentPrize = maxPrize;
    for (let i = 0; i <= 2; i++) {
        let userNum = parseFloat(prompt(`Enter a number from 0 to ${range}` + `\n` +
            `Attempts left: ${3 - i}` + `\n` +
            `Total prize: ${totalSum}$` + `\n` +
            `Possible prize in this game: ${currentPrize}$`));
        if (randNum === userNum) {
            switch (i) {
                case 0:
                    totalSum += currentPrize;
                    confirm(`Congratulation! Your price is ${currentPrize}$` + `\n` +
                        `Do you want to continue?`) ? startGame(maxPrize*2, range + 4, totalSum) : endGame(totalSum);
                    break;
                case 1:
                    currentPrize = maxPrize / 2;
                    totalSum += currentPrize;
                    confirm(`Congratulation! Your price is ${currentPrize}$` + `\n` +
                        `Do you want to continue?`) ? startGame(maxPrize*2, range + 4, totalSum) : endGame(totalSum);
                    break;
                case 2:
                    currentPrize = Math.floor(maxPrize / 4);
                    totalSum += currentPrize;
                    confirm(`Congratulation! Your price is ${currentPrize}$` + `\n` +
                        `Do you want to continue?`) ? startGame(maxPrize*2, range + 4, totalSum) : endGame(totalSum);
                    break;
                default: break;
            }
            break;
        } else {
            switch (i) {
                case 1:
                    currentPrize = maxPrize / 2;
                    break;
                case 2:
                    currentPrize = Math.floor(maxPrize / 4);
                    break;
                case 3:
                    endGame(totalPrize);
                    break;
                default: break;
            }
        }
    }
}

function endGame(prize) {
    alert(`Thank you for a game. Your prize is: ${prize}$`);
    if (confirm('Do you want to try again?')) {
        startGame(maxPrize, attempt, totalPrize)
    } else {
        alert('You did not become a millionaire, but can.');
    }
}