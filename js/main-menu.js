import spangeBobDiv from "./index.js";
import musicData from "./music-data.js";
import { replaceSong } from "./music-data.js";
import { audio } from "./music-data.js";
function mainMenu(callback) {
    const mainMenuConteiner = document.createElement("div");
    mainMenuConteiner.classList.add("main-menu");
    const title = document.createElement("h1");
    title.classList.add("main-menu__title");
    const previousScore = localStorage.getItem("score");
    title.innerHTML = previousScore ? "Welcome back": "Welcome to the game";
    const button = document.createElement("button");
    button.classList.add("main-menu__start-button");
    button.innerHTML = previousScore ? "Continue game" : "Start Game";
    button.addEventListener("click", function () {
        callback();
     });
    mainMenuConteiner.appendChild(title);
    mainMenuConteiner.appendChild(button);
    spangeBobDiv.append(mainMenuConteiner);
    volumeButton(audio);
}

function volumeButton(audio) {
    const musicButton = document.createElement("button");
    const img = document.createElement("img");
    img.src = localStorage.getItem("mute") === "true" ? "./img-for-game/mute.png" : "./img-for-game/volume-up.png";
    musicButton.appendChild(img);
    musicButton.classList.add("music-button");
    musicButton.addEventListener("click", function () {
        if (localStorage.getItem("mute") === "true") {
            localStorage.setItem("mute", "false");
            replaceSong(musicData[0], audio);
            img.src = "./img-for-game/volume-up.png";
        } else {
            localStorage.setItem("mute", "true");
            replaceSong(null, audio);
            img.src = "./img-for-game/mute.png";
        }
    });
    spangeBobDiv.appendChild(musicButton);
    return musicButton;
}



export default mainMenu;