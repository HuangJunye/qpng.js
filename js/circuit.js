import { screenWidth, screenHeight } from "./game.js";

export default class Circuit {
    constructor(scene, x, y, location) {
        this.scene = scene;
        this.circuit = scene.circuitGroup.create(x, y, 'circuit').setScale(3,35).setOrigin(0, 0).setImmovable();
        // left or right
        this.circuit.location = location; 
        this.gateArray = [new Gate('I'), new Gate('I'), new Gate('I')];
        
        // set empty gate array
        for (var i = 0; i < this.gateArray.length; i++) {
            this.scene.circuitGroup.create(x + screenWidth * 0.045, screenHeight * (0.5 + (i-1) * 0.22)  , 'gateI').setScale(0.2).setOrigin(0.5, 0.5).setImmovable();
        }
    }

    update() {
        /*
        for (var i = 0; i < this.gateArray.length; i++) {
            this.scene.circuitGroup.create(x + screenWidth * 0.045, screenHeight * (0.5 + (i-1) * 0.22)  , 'gateI').setScale(0.2).setOrigin(0.5, 0.5).setImmovable();
        }
        */
    }
}

/**
 * Quantum gates
 */
class Gate {
    constructor(type) {
        this.type = type;
    }
}