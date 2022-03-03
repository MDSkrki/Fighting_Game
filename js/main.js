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
}

const startToSelectionScreen = () => {
    hideStartScreen();
    startAudioPlay();
}

// Selection Screen
class Character {
    constructor(characterName, playerName) {
        this.characterName = characterName;
        this.playerName = playerName || 'Player 1';
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

const player1ChooseCharacter = (characterName) => {
    let playerName = document.getElementById("player1Name").value;
    return new Character(characterName, playerName);
}

console.log(player1ChooseCharacter());