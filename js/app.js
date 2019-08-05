///////    ENEMY CLASS   ///////

//// Converted the Enemy class to ES6 /////

class Enemy {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y + 55;
    this.xAxis = 101;
    this.overScreen = this.xAxis * 5;
    this.speed = speed;

    this.sprite = "images/enemy-bug.png";
  }

  update(dt) {
    if (this.x < this.overScreen) {
      this.x += this.speed * dt;
    } else {
      this.x = 0;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

//// I created 3 bugs object to cover the entire screen /////
const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 150);
const bug3 = new Enemy(-101, 221 - 55, 220);
let allEnemies = [];
allEnemies.push(bug1, bug2, bug3);

/* var Enemy = function() {
  // Variables applied to each of our instances go here,
  this.x = 0;
  this.y = 0;

  this.sprite = "images/enemy-bug.png";
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};*/

/////////   PLAYER CLASS ////////

class Hero {
  constructor() {
    this.sprite = "images/char-horn-girl.png";
    this.xAxis = 101;
    this.yAxis = 83;
    this.xStart = this.xAxis * 2;
    this.yStart = this.yAxis * 4 + 55;
    this.x = this.xStart;
    this.y = this.yStart;
    this.win = false;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  //// Collision logic included in the update Function ////
  update() {
    for (let enemy of allEnemies) {
      if (
        this.y === enemy.y &&
        (enemy.x + enemy.xAxis / 2 > this.x &&
          enemy.x < this.x + this.xAxis / 2)
      ) {
        this.reset();
      }
    }
    ///// Win Logic included in the Function ///
    if (this.y === -28) {
      this.win = true;
    }
  }

  handleInput(input) {
    switch (input) {
      case "left":
        if (this.x > 0) {
          this.x -= this.xAxis;
        }
        break;
      case "up":
        if (this.y > 0) {
          this.y -= this.yAxis;
        }
        break;
      case "right":
        if (this.x < this.xAxis * 4) {
          this.x += this.xAxis;
        }
        break;
      case "down":
        if (this.y < this.yAxis * 4) {
          this.y += this.yAxis;
        }
        break;
    }
  }
  //// Bring the player to the start point ////
  reset() {
    this.x = this.xStart;
    this.y = this.yStart;
  }
}

const player = new Hero();

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

//////     LISTENER FOR KEYCODE   //////

document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
