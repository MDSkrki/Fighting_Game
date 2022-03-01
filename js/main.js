const audioPlay = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

const hideStartScreen = () => {
    let startScreen = document.getElementById("startScreen");
    let selectionScreen = document.getElementById("selectionScreen")
    startScreen.style.display = 'none';
    selectionScreen.style.display = 'block';
    audioPlay();
}