import Character from "./Character.js";
import { currentLevel } from "../main.js";

class keySet {
    constructor(up, left, down, right, interact, attack){
        this.up = up;
        this.left = left;
        this.right = right;
        this.down = down;
        this.interact = interact;
        this.attack = attack;
    }
}

class Player extends Character {
    constructor(position, image, size, keys){
        let ts = super(position, image, size);

        this.spawnLocation = position;
        this.keys = keys;
        this.speed = 8;

        window.addEventListener("keydown", (event) => {
            if(event.key.toLowerCase() == keys.interact){
                currentLevel.chars.forEach((item) => {
                    if(ts.position.distanceTo(item.position) < 100){
                        item.onInteract();
                    }
                })
            }
        });
    }
}

export {Player, keySet};