import { screenWidth, screenHeight } from './game.js';

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

        // define keyboard controls
        this.keys = this.scene.input.keyboard.addKeys({
            x: 'x',
            h: 'h',
            up: 'w',
            down: 's',
            left: 'a',
            right: 'd',
            delete: 'space'
        });

        this.selectedGateIndex = 0;
        this.cursor = new Cursor(scene, x, y);
    }

    update() {
        // select gate
        if (Phaser.Input.Keyboard.JustDown(this.keys.up)) {
            this.selectedGateIndex--;
        } else if (Phaser.Input.Keyboard.JustDown(this.keys.down)) {
            this.selectedGateIndex++;
        }
        // handle out of index
        if (this.selectedGateIndex < 0) {
            this.selectedGateIndex = 0;
        } else if (this.selectedGateIndex > 2) {
            this.selectedGateIndex = 2;
        }

        this.cursor.update(this.gateArray[this.selectedGateIndex].x, this.gateArray[this.selectedGateIndex].y);
        //console.log('Selected Gate Index: '+this.selectedGateIndex);

        if (this.keys.x.isDown) {
            this.gateArray[this.selectedGateIndex].gateType = 'X';
        } else if (this.keys.h.isDown) {
            this.gateArray[this.selectedGateIndex].gateType = 'H';
        } else if (this.keys.delete.isDown) {
            this.gateArray[this.selectedGateIndex].gateType = 'I';
        }

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

    updateTexture() {
        this.setTexture(this.gateType);
    }
}

/**
 *  Cursor for selecting gates
 */

class Cursor extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.setTexture('cursor');
        this.update();
        scene.add.existing(this);
    }

    update(x, y) {
        this.setX(x);
        this.setY(y);
    }
}

export {Circuit, Gate};