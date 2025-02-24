import startGame from "./start-game.js";
import spangeBobDiv from "./index.js";
function howToPLay() {
    spangeBobDiv.innerHTML = "";
    const howToPlayConteiner = document.createElement("div");
    howToPlayConteiner.classList.add("how-to-play");
    const title = document.createElement("h1");
    title.classList.add("how-to-play__title");
    title.innerHTML = '<div class="how-to-play__alignment">Jellyfish Hunt with SpongeBob! <img src="./img-for-game/spangebobOnJellyFisg.jpg" alt="SpangeBob" class="how-to-play__spangeBobOnJellyFish"></div>';
    const description = document.createElement("div");
    description.classList.add("how-to-play__description");
    description.innerHTML = ` <div class="how-to-play__alignment">SpongeBob is on a mission to catch as many pink jellyfish as possible!<img src="./img-for-game/jellyfish-first-move.svg" alt="jellyfish-pink" class="how-to-play__jellyfish"></div>
    <div class="how-to-play__alignment">But watch out—purple jellyfish are dangerous! <img src="./img-for-game/jellyfishBad1.svg" alt="jellyfish-purple" class="how-to-play__jellyfish"></div>
    <span class="how-to-play__hightlight">How to Play?</span><br>
    <ul>
    <li>Click on pink jellyfish to catch them and earn points.</li>
    <li><div class="how-to-play__alignment">Avoid clicking on purple jellyfish—they will take away your lives!<img src="./img-for-game/heart.png" alt="heart" class="how-to-play__heart"></div>
    <li>You have 3 lives—be careful not to lose them all!</li>
    </ul>
    Can you help SpongeBob become the ultimate jellyfish catcher? <br> <span class="how-to-play__hightlight">Let’s find out!</span>`;
    const button = document.createElement("button");
    button.classList.add("how-to-play__button");
    button.innerText = "Catch Jellyfish!";
    button.addEventListener("click", function () {
        startGame();
    });
    howToPlayConteiner.appendChild(title);
    howToPlayConteiner.appendChild(description);
    howToPlayConteiner.appendChild(button);
    spangeBobDiv.append(howToPlayConteiner);
};

export default howToPLay;