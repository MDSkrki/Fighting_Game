// Character classes
class Character {
    constructor(playerName) {
        this.characterName = 'Catto';
        this.playerName = playerName || 'Teapot 418';
        this.health = 100;
    }
    attack() {return this.damage}
    meow() {return this.defense += 15}
}

class Catto extends Character {
    constructor(playerName) {
        super(playerName);
        this.damage = 20;
        this.defense = 50;
    }
}

class Clawsy extends Character {
    constructor(playerName) {
        super(playerName);
        this.damage = 35;
        this.defense = 10;
    }
}

class MeowTank extends Character {
    constructor(playerName) {
        super(playerName);
        this.damage = 20;
        this.defense = 150;
    }
}

class NinjaMeow extends Character {
    constructor(playerName) {
        super(playerName);
        this.damage = 10;
        this.defense = 10;
    }
    attack() {return this.damage + getRandomInt(10, 60)}
    meow() {return this.defense += getRandomInt(10, 30)}
}

// USEFUL FUNCTIONS
// getRandomInt to get a random integer between the min and max values
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


// Start Screen
const startAudioPlay = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

const hideStartScreen = () => {
    let startScreen = document.getElementById("startScreen");
    let selectionScreen = document.getElementById("selectionScreen");
    startScreen.style.display = 'none';
    selectionScreen.style.display = 'block';
}

const startToSelectionScreen = () => {
    hideStartScreen();
    startAudioPlay();
}

// Selection Screen
const chooseCharacter = (characterName) => {
    let playerName = document.getElementById("player1Name").value;
    return new characterName(playerName);
}