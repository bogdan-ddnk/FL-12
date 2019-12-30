let startPlay = confirm('Do you want to play a game?');
let maxRandomNumber = 8;
let randomNumber;
let inputNumber;
let maxAttempts = 3;
let prize = 100;
let totalPrize = 0;
const prizeDown = 2;
const prizeUp = 200;

if (!startPlay) {
    alert('You did not become a billionaire, but can')
} else {
    randomNumber = Math.floor(Math.random() * (maxRandomNumber + 1));
    console.log(randomNumber);
    while (maxAttempts > 0) {
        inputNumber = prompt(`Choose a roulette number from 0 to ${maxRandomNumber} 
    Attempts left: ${maxAttempts}
    Total prize: ${totalPrize}$
    Possible prize on current attempt: ${prize}$`);
        if (+inputNumber === randomNumber && inputNumber !== null) {
            totalPrize += prize;
            startPlay = confirm(`Congratulation, you won! 
        Your prize is: ${totalPrize}$. Do you want to continue?`);
        if(startPlay){
            let maxRandomNumber = 12;
            prize = prizeUp;
            randomNumber = Math.floor(Math.random() * (maxRandomNumber + 1));
            console.log(randomNumber);
        } else {
            alert(`Thank you for your participation. Your prize is:${totalPrize}`);
            confirm(`Do you want to play again?`);
            if(startPlay){
                randomNumber = Math.floor(Math.random() * (maxRandomNumber + 1)); 
                console.log(randomNumber);
            } else{
                break;
            }
        }
        } else {
            maxAttempts--; prize /= prizeDown;
        }



    }



}