export default class JellyFish {
    static count = 0;
    constructor(direction, speed) {
        this.direction = direction;
        this.speed = speed;
        this.flippedX = false;
        this.x = Math.random() * (window.innerWidth - 130);
        this.y = Math.random() * (window.innerHeight - 160); 
    }
    
    static createJellyFish(n, speed) {
        let jellyfishes = [];
        const directions = ["left", "right"];
        for (let i = 0; i < n; i++) {
            let direction = directions[Math.floor(Math.random() * 2)];
            let jellyfishObject = new JellyFish(direction, speed);
            jellyfishes.push(jellyfishObject);
        }
        return jellyfishes;
    }

    jellyfishMove(jellyfishElement) {
        const jellyfishWidth = 130;
        switch (this.direction) {
            case "left":
                this.x -= this.speed;
                if (this.x < 0) {
                    this.x = 0;
                    this.direction = "right";
                    this.flip(jellyfishElement);
                }
                break;

            case "right":
                this.x += this.speed;
                if (this.x > window.innerWidth - jellyfishWidth) {  
                    this.x = window.innerWidth - jellyfishWidth;
                    this.direction = "left";
                    this.flip(jellyfishElement);
                    
                }
                break;
        }
    }

    flip(jellyfishEl) {
        this.flippedX = !this.flippedX;
        jellyfishEl.style.transform = this.flippedX ? "scaleX(1)" : "scaleX(-1)";
    }


    static catchJellyFish(jellyfish) {
        jellyfish.onclick = null;
        jellyfish.remove();
        JellyFish.count += 1;
    }

}




