function rollDice() {
    const numOfDice = document.getElementById('dice-input').value;
    const diceNum = document.getElementById('diceNum');
    const diceImg = document.getElementById('diceImg');
    const img = [];
    const diceArr = [];

    // if isFirstTime doesn't exist in sessionStorage, then only show alert once, after that set isFirstTime to false which will prevent alert from showing again as it is not first time and exists in sessionStorage.
    if (numOfDice > 51 && !sessionStorage.getItem('isFirstTime')) {
        alert('Please enter number less than 51');
        sessionStorage.setItem('isFirstTime', 'false');
        return;
    }

    // loop will run numOfDice times and push random number between 1 to 6
    for (let i = 1; i <= numOfDice; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceArr.push(diceRoll);
        img.push(`<img src="./images/${diceRoll}.png" width="100px" height="100px" id="diceImages" alt="dice${diceRoll}">`);
    }
    diceNum.textContent = diceArr.join(', ');
    diceImg.innerHTML = img.join('');
}

// document.getElementById('roll-dice').onload = rollDice();
// instead of adding event listener to button, we can call rollDice function on window load.
// window.onload = rollDice();

//window.onload = rollDice(); directly calls the function, which might cause issues if elements aren't fully loaded yet.
window.addEventListener('load', () => {
    // remove isFirstTime from sessionStorage so that on every page reload, alert will show.
    sessionStorage.removeItem('isFirstTime');
    rollDice();
});

// run rollDice function on enter key press, used keydown instead of keypress because keypress event is fired when user releases the key, while keydown event is fired when user presses the key and it supports by modern browsers.
document.getElementById('dice-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        rollDice();
    }
})