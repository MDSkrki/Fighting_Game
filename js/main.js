// Character classes
class Character {
    constructor(playerName) {
        this.playerName = playerName;
        this.health = 100;
    }
    attack() { return this.damage }
    meow() { return this.defense += 15 }
}

class Catto extends Character {
    constructor(playerName) {
        super(playerName);
        this.characterName = 'Catto';
        this.damage = 20;
        this.defense = 50;
    }
}

class Clawsy extends Character {
    constructor(playerName) {
        super(playerName);
        this.characterName = 'Clawsy';
        this.damage = 35;
        this.defense = 10;
    }
}

class MeowTank extends Character {
    constructor(playerName) {
        super(playerName);
        this.characterName = 'MeowTank';
        this.damage = 20;
        this.defense = 150;
    }
}

class NinjaMeow extends Character {
    constructor(playerName) {
        super(playerName);
        this.characterName = 'NinjaMeow';
        this.damage = 10;
        this.defense = 10;
    }
    attack() { return this.damage + getRandomInt(10, 60) }
    meow() { return this.defense += getRandomInt(10, 30) }
}

// USEFUL GLOBAL FUNCTIONS AND VARIABLES
// getRandomInt to get a random integer between the min and max values
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let player1;
let player2;
let winner;

// Start Screen
const startAudioPlay = () => {
    const audio = document.getElementById("startAudio");
    audio.play();
}

const hideStartScreen = () => {
    const startScreen = document.getElementById("startScreen");
    const selectionScreen = document.getElementById("selectionScreen");
    startScreen.style.display = 'none';
    selectionScreen.style.display = 'block';
}

const startToSelectionScreen = () => {
    hideStartScreen();
    startAudioPlay();
}

// Selection Screen
const chooseCharacterPlayer1 = (characterName) => {
    let playerName = document.getElementById("player1Name").value;
    return new characterName(playerName);
}

const chooseCharacterPlayer2 = (characterName) => {
    let playerName = document.getElementById("player2Name").value;
    return new characterName(playerName);
}

const setPlayerNames = () => {
    const player1Name = document.querySelector(".player1Name");
    const player2Name = document.querySelector(".player2Name");
    player1Name.innerHTML = player1.playerName;
    player2Name.innerHTML = player2.playerName;
}

const statsUpdater = () => {
    const player1HealthIndicator = document.querySelector(".player1HealthIndicator");
    const player2HealthIndicator = document.querySelector(".player2HealthIndicator");
    player1HealthIndicator.innerHTML = 'Health: ' + player1.health;
    player2HealthIndicator.innerHTML = 'Health: ' + player2.health;

    const player1DefenseIndicator = document.querySelector(".player1DefenseIndicator");
    const player2DefenseIndicator = document.querySelector(".player2DefenseIndicator");
    player1DefenseIndicator.innerHTML = 'Defense: ' + player1.defense;
    player2DefenseIndicator.innerHTML = 'Defense: ' + player2.defense;
}

const hideSelectionScreen = () => {
    const selectionScreen = document.getElementById("selectionScreen");
    const fightScreen = document.getElementById("fightScreen");
    selectionScreen.style.display = 'none';
    fightScreen.style.display = 'block';
}

const fightAudioPlay = () => {
    const audio = document.getElementById("fightAudio");
    audio.play();
}

const backgroundSelectionToFight = () => {
    const background = document.getElementsByTagName("body");
    background[0].style.backgroundImage = "url('./resources/img/cats-fighting-in-a-larder.jpg')"
}

const selectionToFightScreen = () => {
    if (player1 && player2) {
        setPlayerNames();
        hideSelectionScreen();
        backgroundSelectionToFight();
        fightAudioPlay();
        statsUpdater();
    } else {
        alert('Both players have to choose a character!');
    }
}

// Fight Screen

const hideFightScreen = () => {
    const fightScreen = document.getElementById("fightScreen");
    const winnerScreen = document.getElementById("winnerScreen");
    fightScreen.style.display = 'none';
    winnerScreen.style.display = 'block';
}

const attackAudio = () => {
    const audio = document.getElementById("attackAudio");
    audio.play();
}

const meowAudio = () => {
    const audio = document.getElementById("meowAudio");
    audio.play();
}

const winnerAudioPlay = () => {
    const audio = document.getElementById("winnerAudio");
    audio.play();
}

const fightToWinnerScreen = () => {
    hideFightScreen();
    winnerAudioPlay();
}

const toggleButtons = () => {
    const buttonsPlayer1 = document.getElementById("buttonsPlayer1");
    const buttonsPlayer2 = document.getElementById("buttonsPlayer2");

    if (buttonsPlayer1.style.display == 'flex') {
        buttonsPlayer1.style.display = 'none';
        buttonsPlayer2.style.display = 'flex'
    } else {
        buttonsPlayer1.style.display = 'flex';
        buttonsPlayer2.style.display = 'none';
    }
}

const victoryChecker = (attacker, defender) => {
    if (defender.health <= 0) {
        console.log(defender.playerName + ' is ded');
        winner = attacker.playerName;
        fightToWinnerScreen();
        winnerText();
    }
}

const attack = (attacker, defender) => {
    attackAudio();
    let initialDamage = attacker.attack();
    let filteredDamage = defender.defense - initialDamage;
    if (filteredDamage <= 0) {
        defender.health -= Math.abs(filteredDamage);
        defender.defense = 0;
    } else {
        defender.defense -= initialDamage;
    }
    victoryChecker(attacker, defender);
    statsUpdater();
    toggleButtons();
    console.log(player1, player2);
}

const meow = (player) => {
    meowAudio();
    player.meow();
    toggleButtons();
    statsUpdater();
    console.log(player1, player2);
}

// Winner Screen
const winnerText = () => {
    const winnerText = document.getElementById("winnerText");
    winnerText.innerHTML = winner + ' is the winner!!';
}

const secret = () => {
    window.open("https://www.google.com/teapot");
}