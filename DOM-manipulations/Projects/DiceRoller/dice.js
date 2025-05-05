function rollDice() {
    const numOfDice = document.getElementById('dice-input').value;
    const diceNum = document.getElementById('diceNum');
    const diceImg = document.getElementById('diceImg');
    const img = [];
    const diceArr = [];

    // loop will run numOfDice times and push random number between 1 to 6
    for (let i = 1; i <= numOfDice; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceArr.push(diceRoll);
        img.push(`<img src="./images/${diceRoll}.png" width="100px" height="100px" id="diceImages" alt="dice${diceRoll}">`);
    }
    diceNum.textContent = diceArr.join(', ');
    diceImg.innerHTML = img.join('');
}

// run rollDice function on enter key press
document.getElementById('dice-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        rollDice();
    }
})