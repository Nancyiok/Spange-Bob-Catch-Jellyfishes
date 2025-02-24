import spangeBobDiv from "./index.js";
import JellyFish from "./jellyfish.js";
export default function GameOver() {
    const newRecord = checkProgress();
    [...spangeBobDiv.children].forEach(el=>el.remove());
    const gameOverContainer = document.createElement("div");
    gameOverContainer.classList.add("game-over");
    const title = document.createElement("h3");
    title.classList.add("game-over__title");
    title.innerText = "Game Over";
    const score = document.createElement("p");
    score.classList.add("game-over__score");
    score.innerHTML = newRecord ? `You have a new record: <span>${JellyFish.count}</span>!` : `Score: <span>${JellyFish.count}</span>`;
    const button = document.createElement("button");
    button.classList.add("game-over__restart-button");
    button.innerText = "Restart Game";
    button.addEventListener("click", function () {
        location.reload();
    });
    const backgroundHover = document.createElement("div");
    backgroundHover.classList.add("game-over__background-hover");
    gameOverContainer.appendChild(backgroundHover);
    gameOverContainer.appendChild(title);
    gameOverContainer.appendChild(score);
    gameOverContainer.appendChild(button);
    spangeBobDiv.append(gameOverContainer);
}

function checkProgress() {
    const scoreTotal = JellyFish.count;
    let previousScore = +localStorage.getItem("score");
    previousScore = previousScore ? previousScore : 0;
    if (previousScore < scoreTotal) {
        localStorage.setItem("score", JSON.stringify(scoreTotal));
        return true;
    }

    return false;
}

export { checkProgress };

