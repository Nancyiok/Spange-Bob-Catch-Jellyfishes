const musicData = ["./music/music-for-menu.mp3", "./music/music-for-game.mp3", "./music/game-over.m4a", "./music/damage-sound.m4a"];
export let audio = null;  

function replaceSong(newSongUrl) {
    if (localStorage.getItem("mute") === "true") {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        return
    }
    if (audio) {
        audio.pause();
    }
    audio = new Audio(newSongUrl);  
    audio.loop = true; 
    audio.play();

    return audio;
}


export { replaceSong };
export default musicData;