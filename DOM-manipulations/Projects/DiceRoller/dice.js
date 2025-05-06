function rollDice() {
    const numOfDice = document.getElementById('dice-input').value;
    const diceNum = document.getElementById('diceNum');
    const diceImg = document.getElementById('diceImg');
    const img = [];
    const diceArr = [];

    // loop will run numOfDice times and push random number between 1 to 6
    for (let i = 1; i <= numOfDice; i++) {
        // if isFirstTime doesn't exist in sessionStorage, then only show alert once, after that set isFirstTime to false which will prevent alert from showing again as it is not first time and exists in sessionStorage.
        if(numOfDice > 51 && !sessionStorage.getItem('isFirstTime')) {
            alert('Please enter number less than 51')
            sessionStorage.setItem('isFirstTime', 'false')     
        }
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceArr.push(diceRoll);
        img.push(`<img src="./images/${diceRoll}.png" width="100px" height="100px" id="diceImages" alt="dice${diceRoll}">`);
    }
    diceNum.textContent = diceArr.join(', ');
    diceImg.innerHTML = img.join('');
}

// document.getElementById('roll-dice').onload = rollDice();
// instead of adding event listener to button, we can call rollDice function on window load.
window.onload = rollDice();

// run rollDice function on enter key press
document.getElementById('dice-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        rollDice();
    }
})