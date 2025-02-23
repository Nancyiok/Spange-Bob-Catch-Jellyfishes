import JellyFish from "./jellyfish.js";
import BadJellyfish from "./badJellyfish.js";
import SpangeBob from "./spangeBob.js";
import spangeBobDiv from "./index.js";
export default function makeJellyFishMove() {
    const jellyfishes = JellyFish.createJellyFish(20, 5);
    const jellyfishElements = [];
    createJellyFishes(jellyfishes, jellyfishElements, false);
    changeJellyFishPosition(jellyfishes, jellyfishElements, false);
    let badJellyfishes = BadJellyfish.createJellyFish(4, 15);
    const badJellyfishElements = [];
    createJellyFishes(badJellyfishes, badJellyfishElements, true);
    changeJellyFishPosition(badJellyfishes, badJellyfishElements, true);
    const spangeBob = SpangeBob.createCharacter();
}

function changeJellyFishPosition(jellyfishes, jellyfishElements, bad) {

    jellyfishElements.forEach((jellyfishElement, index) => {
        if (bad) {
            catchBadJellyFishes(jellyfishElement);
        } else {
            catchJellyFishes(jellyfishElement);
        }
        setInterval(() => {
            health();
            jellyfishes[index].jellyfishMove(jellyfishElement);
            jellyfishElement.style.top = `${jellyfishes[index].y}px`;
            jellyfishElement.style.left = `${jellyfishes[index].x}px`;
        }, 1000 / 60);
    });
}

function addnewJellyFishes() {
    let speed = Math.floor(Math.random() * 10) + 1;
    const jellyfishes = JellyFish.createJellyFish(1, speed);
    const jellyfishElements = [];
    createJellyFishes(jellyfishes, jellyfishElements, false);
    changeJellyFishPosition(jellyfishes, jellyfishElements);
    let badJellyfishes = BadJellyfish.createJellyFish(1, speed);
    const badJellyfishElements = [];
    createJellyFishes(badJellyfishes, badJellyfishElements, true);
    changeJellyFishPosition(badJellyfishes, badJellyfishElements, true);
}

function createJellyFishes(jellyfishes, jellyfishContainer, bad) {
    jellyfishes.forEach(jellyfish => {
        const jellyfishDiv = document.createElement("div");
        if (bad) {
            jellyfishDiv.classList.add("bad-jellyfish");
        }

        jellyfishDiv.classList.add("jellyfish");

        jellyfishDiv.style.position = "absolute";
        jellyfishDiv.style.top = `${jellyfish.y}px`;
        jellyfishDiv.style.left = `${jellyfish.x}px`;
        const costume1 = document.createElement("img");
        if (bad) {
            costume1.src = "../img-for-game/jellyfishBad1.svg";
            costume1.alt = "Костюм для поганої медузи 1";
        } else {
            costume1.src = "../img-for-game/jellyfish-first-move.svg";
            costume1.alt = "Костюм для медузи 1";
        }
        jellyfishDiv.appendChild(costume1);
        costume1.style.pointerEvents = "none";
        const costume2 = document.createElement("img");
        if (bad) {
            costume2.src = "../img-for-game/jellyfishBad2.svg";
            costume2.alt = "Костюм для поганої медузи 2";
        }

        else {
            costume2.src = "../img-for-game/jellyfish-second-move.svg";
            costume2.alt = "Костюм для медузи 2";
        }

        costume2.style.pointerEvents = "none";
        jellyfishDiv.appendChild(costume2);
        spangeBobDiv.appendChild(jellyfishDiv);
        jellyfishContainer.push(jellyfishDiv);
        return jellyfishes;

    });
}


function catchJellyFishes(jellyfish) {
    jellyfish.addEventListener("click", function () {
        JellyFish.catchJellyFish(jellyfish);
        addnewJellyFishes();
        createCounter();
    });
}

function catchBadJellyFishes(jellyfish) {
    jellyfish.addEventListener("click", function () {
        BadJellyfish.catchJellyFish(jellyfish);
        damage();
        createCounter();
    });

}

function damage() {
    if (BadJellyfish.health > 0) {
        const redBackground = document.createElement("div");
        redBackground.classList.add("red-background");
        spangeBobDiv.appendChild(redBackground);
        document.body.style.pointerEvents = "none";
        setTimeout(() => {
            document.body.style.pointerEvents = "all";
            redBackground.remove();
        }, 1000);
    }
    else {
        let counterContainer = spangeBobDiv.querySelector(".counter-container p");
        counterContainer.style.display = "none";
        return;
    }
}

function createCounter() {
    if (spangeBobDiv.querySelector(".counter-container")) {
        document.querySelector(".counter-container p").innerHTML = `Your score: <span>${JellyFish.count}</span>`;
        return;
    }
    else {
        const counterContainer = document.createElement("div");
        counterContainer.classList.add("counter-container");
        const counter = document.createElement("p");
        counter.innerHTML = `Your score: <span>${JellyFish.count}</span>`; 
        counterContainer.appendChild(counter);
        spangeBobDiv.appendChild(counterContainer);
    }
}
function health() {
    let healthContainer = spangeBobDiv.querySelector(".health-container");
    if (healthContainer) {
        healthContainer.innerHTML = "";
    } else {
        healthContainer = document.createElement("div");
        healthContainer.classList.add("health-container");
        spangeBobDiv.appendChild(healthContainer);
    }

    for (let i = 0; i < BadJellyfish.health; i++) {
        const health = document.createElement("img");
        health.src = "../img-for-game/heart.png";
        health.alt = "Heart";
        healthContainer.appendChild(health);
    }
}


