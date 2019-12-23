import { screenWidth, screenHeight } from "./game.js";

class Circuit {
    constructor(scene, x, y, location) {
        this.scene = scene;
        this.circuit = scene.circuitGroup.create(x, y, 'circuit').setScale(3,35).setOrigin(0, 0).setImmovable();
        // left or right
        this.circuit.location = location; 
        //this.gateArray = [new Gate('I'), new Gate('I'), new Gate('I')];
        
        // set empty gate array
        /*
        for (var i = 0; i < this.gateArray.length; i++) {
            this.scene.circuitGroup.create(x + screenWidth * 0.045, screenHeight * (0.5 + (i-1) * 0.22)  , 'gateI').setScale(0.2).setOrigin(0.5, 0.5).setImmovable();
        }
        */
    }

    update() {

    }
}

/**
 * Quantum gates
 */
class Gate extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y);
        this.type = type;
        this.scaleX = 0.15;
        this.scaleY = 0.15;
        this.texture = 'gate' + this.type;
        this.setTexture(this.texture);
    }
}

export {Circuit, Gate};