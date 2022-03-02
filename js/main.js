// Start Screen
const startAudioPlay = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

const hideStartScreen = () => {
    let startScreen = document.getElementById("startScreen");
    let selectionScreen = document.getElementById("selectionScreen")
    startScreen.style.display = 'none';
    selectionScreen.style.display = 'block';
    startAudioPlay();
}

// Selection Screen

class Character1 {
    constructor(playerName) {
        this.playerName = playerName;
        this.characterName = 'Catto';
        this.health = 100;
        this.dmg = 20;
    }

    attack() {
        return this.dmg;
    }

    meow() {
        return this.health + 10;
    }
}

const choosePlayer1Character1 = () => {
    let playerName = document.getElementById("player1Name").value;
    let characterName = document.getElementById("character1Button").innerHTML;
    return new characterName(playerName);
}

