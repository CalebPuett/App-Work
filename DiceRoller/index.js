function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i =0; i< numOfDice;i++){
        const rand = Math.floor(Math.random() * 6)+1;
        values.push(rand);
        images.push(`<img src="dice_images/${rand}.png">`);
        diceResult.textContent = `dice ${values.join(`, `)}`;
        diceImages.innerHTML = images.join('');
    }
}