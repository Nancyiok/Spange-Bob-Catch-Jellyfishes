import spangeBobDiv from "./index.js";
import makeJellyFishMove from "./game-functionality.js";
import musicData from "./music-data.js";
import { replaceSong } from "./music-data.js";
import { audio } from "./music-data.js";
function startGame() {
    replaceSong(musicData[1], audio);
    spangeBobDiv.innerHTML = "";
    const startConteiner = document.createElement("div");
    startConteiner.classList.add("start-game");
    const countDownContainer = document.createElement("div");
    countDownContainer.classList.add("count-down-container");
    const countDown = document.createElement("h2");
    countDown.classList.add("count-down");
    countDownContainer.appendChild(countDown);
    startConteiner.appendChild(countDownContainer);
    spangeBobDiv.appendChild(startConteiner);
    let i = 3;
    function updateCountDown() {
        if (i > 0) {
            countDown.innerText = i;
        } else {
            countDown.innerHTML = `<span class="start-game-higlight">GO!</span>`;
        }

        if (i >= 0) {
            i--;
            setTimeout(updateCountDown, 1000);
        } else {
            countDownContainer.remove();
            makeJellyFishMove();
        }
    }

    updateCountDown();

}

export default startGame;
