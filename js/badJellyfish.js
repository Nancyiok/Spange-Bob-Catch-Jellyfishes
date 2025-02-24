import musicData from "./music-data.js";
import { audio } from "./music-data.js";
import goodJellyFish from "./jellyfish.js";
import GameOver from "./gameOver.js";
import { replaceSong } from "./music-data.js";
class BadJellyfish extends goodJellyFish {
    static health = 3;
    constructor(direction, speed) {
        super(direction, speed);
    }

    static catchJellyFish(jellyfish) {
        jellyfish.onclick = null;
        jellyfish.remove();
        goodJellyFish.count -= 1;
        BadJellyfish.health -= 1;
        const newObjectSong = replaceSong(musicData[3], audio);
        if (BadJellyfish.health === 0) {
            replaceSong(musicData[2], audio);
            GameOver();
        }
        else {
            setTimeout(() => replaceSong(musicData[1], newObjectSong), 2000);
        }
    }
}

export default BadJellyfish;