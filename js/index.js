import mainMenu from "./main-menu.js";
import howToPLay from "./description-how-to-play.js";
import startGame from "./start-game.js";
const spangeBobDiv = document.querySelector(".spange-bob-game");
export default spangeBobDiv;
if (localStorage.getItem("score")) {
    mainMenu(startGame, spangeBobDiv);
}
else {
    mainMenu(howToPLay, spangeBobDiv);
}

