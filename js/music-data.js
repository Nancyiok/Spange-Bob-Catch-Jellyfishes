const musicData = ["./music/music-for-menu.mp3", "./music/music-for-game.mp3", "./music/game-over.m4a", "./music/damage-sound.m4a"];
export let audio = null;  

async function replaceSong(newSongUrl) {
    if (localStorage.getItem("mute") === "true") {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        return
    }
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.src = newSongUrl;
    } else {
        audio = new Audio(newSongUrl);
        audio.loop = true;
    }

    try {
        await new Promise(resolve => {
            audio.addEventListener('loadeddata', resolve); 
        });
        await audio.play();
    } catch (error) {
        console.error("Помилка відтворення:", error);
    }

    return audio;
}


export { replaceSong };
export default musicData;