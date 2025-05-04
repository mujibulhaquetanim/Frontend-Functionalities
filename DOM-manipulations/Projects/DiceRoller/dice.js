function rollDice() {
    const numOfDice = document.getElementById('dice-input').value;
    const diceNum = document.getElementById('diceNum');
    const diceImg = document.getElementById('diceImg');
    const img = [];
    const diceArr = [];

    for (let i = 1; i <= numOfDice; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceArr.push(diceRoll);
        img.push(`<img src="dice${diceRoll}.png" alt="dice${diceRoll}">`);
    }
    diceNum.textContent = diceArr.join(', ');
    diceImg.innerHTML = img.join('');
}