import goodJellyFish from "./jellyfish.js";
import spangeBobDiv from "./index.js";

class spangeBob extends goodJellyFish {
    constructor() {
        super();
    }

    static createCharacter() {
        const character = document.createElement("div");
        character.classList.add("spangeBob");
        const characterImg = document.createElement("img");
        characterImg.src = "./img-for-game/spangeBob.svg";
        character.style.position = "absolute";
        character.appendChild(characterImg);
        spangeBobDiv.appendChild(character);
        character.style.bottom = `${0}px`;
        character.style.left = `${0}px`;
        return character;
    }
  
}

export default spangeBob;
