import { screenWidth, screenHeight } from "./game.js";

class Circuit extends Phaser.GameObjects.Sprite {
    constructor(scene, location) {
        if (location === 'left') {
            var x = 0;
            var y = 0;
        }
        else if (location === 'right') {
            var x = screenWidth * 0.91;
            var y = 0;
        }
        // initilize circuit sprite
        super(scene, x, y);
        this.setTexture('circuit');
        this.setScale(3, 35);
        this.setOrigin(0, 0);
        scene.add.existing(this);
 
        // initilize empty gate array
        this.gateArray = [new Gate(scene, 'I'), new Gate(scene, 'I'), new Gate(scene, 'I')];       
        // set empty gate array with specified positions
        for (var i = 0; i < this.gateArray.length; i++) {
            this.gateArray[i].setX(x + screenWidth * 0.05);
            this.gateArray[i].setY(screenHeight * (0.5 + (i - 1) * 0.22));
        }
    }

    update() {
        // update gate images
        for (var i = 0; i < this.gateArray.length; i++) {
            this.gateArray[i].updateTexture();
        }
    }
}

/**
 * Quantum gates
 */
class Gate extends Phaser.GameObjects.Sprite {
    constructor(scene, gateType, x = 0, y = 0) {
        super(scene, x, y);

        this.gateType = gateType;
        this.updateTexture();
        this.setScale(0.15);        
        scene.add.existing(this);
    }

    updateTexture () {
        this.setTexture(this.gateType);
    }
}

export {Circuit, Gate};