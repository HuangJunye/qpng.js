var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preloadGame,
        create: createGame,
        update: updateGame
    }
};

var game = new Phaser.Game(config);

var cursor;
var player;
var pc;
var ball;

var velocityX=Phaser.Math.Between(-100, 100);
var velocityY=100;

function preloadGame () {
    this.load.image('ground','assets/ground.png');
    this.load.image('player','assets/player.png');
    this.load.image('pc','assets/pc.png');
    this.load.image('ball','assets/ball.png');
}

function createGame () {
    this.add.image(400, 200, 'ground');

    cursor = this.input.keyboard.createCursorKeys();
    console.log(cursor);

    this.keyW=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    player = this.physics.add.sprite(780, 200, 'player');
    player.setCollideWorldBounds(true);

    pc=this.physics.add.sprite(20, 200, 'pc');
    pc.setCollideWorldBounds(true);

    ball = this.physics.add.sprite(400, 200, 'ball');
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);
    ball.setVelocityY(velocityY);
    ball.setVelocityX(velocityX);
}

function updateGame () {
    // controls for pc
    if(this.keyW.isDown) {
        pc.setVelocityY(-150);
    } else if(this.keyS.isDown) {
        pc.setVelocityY(150);
    } else {
        pc.setVelocityY(0);
    }
    // controls for player
    if(cursor.up.isDown) {
        player.setVelocityY(-150);
    } else if(cursor.down.isDown) {
        player.setVelocityY(150);
    } else {
        player.setVelocityY(0);
    }
}

