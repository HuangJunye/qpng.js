import { screenWidth, screenHeight } from "./game";

export default class Circuit {
    constructor(scene, x, y, location) {
        this.scene = scene;
        this.circuit = scene.circuitGroup.create(x, y, 'circuit').setScale(3,35).setOrigin(0, 0).setImmovable();
        // left or right
        this.circuit.location = location; 
        this.gateArray = [new Gate('I'), new Gate('I'), new Gate('I')];
        //console.log(this.gateArray.length);
        /*
        for (var i = 0; i < this.gateArray.length; i++) {
            scene.circuitGroup.create(x + screenWidth * 0.1, screenHeight * 0.5 , 'gateI').setScale(0.2).setOrigin(0, 0).setImmovable();
        }
        */
    }

    update() {
        for (const gate of this.gateArray) {
            
        }
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