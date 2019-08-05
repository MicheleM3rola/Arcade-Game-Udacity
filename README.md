# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)
- [Code](#code)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## Code

Udacity Provide Us we a structured mini game with html Canvas and engine rdy to work as functionality were rdy to be added in the app.js

I started converting the function provided by udacity

```javascript
var Enemy = function() {
  this.sprite = "images/enemy-bug.png";
};

Enemy.prototype.update = function(dt) {};
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
```

to ES6 Classe

```javascript
class Enemy {
  constructor() {
    this.sprite = "images/enemy-bug.png";
  }

  update(dt) {}

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}
```

Than I did the same with the player Class

```javascript
class Hero {
  constructor() {


  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }


  update() {}

  handleInput() {

  }

  reset() {}
}
```

After that I created the instance for the class Enemy and Hero in my case that I called
'player' and 'bug'.

```javascript
const bug1 = new Enemy();
const bug2 = new Enemy();
const bug3 = new Enemy();

const player = new Hero();
```

Once this first part was done I started to add property to the classes Enemy and hero, everything based on
x and y axis.

I created a reset function to reset the position of the character and I included the *Win and *Collision login in the function Update.

Once finished in app.js I went to engine.js to implement the win logic in the main function because I need it once you win the game to stop the framework request( basically stop the game).

This is want I implemented in the function:

```javascript
if (player.win === true) {
  modal.style.display = "block";
  win.cancelAnimationFrame(id);
} else {
  id = win.requestAnimationFrame(main);
}
```

adding in the engine function the id variable.

After reached all the game required I implemented a modal that pop up when you reach the river with a button play again to restart the game.

```javascript
const modal = document.querySelector("#myModal");
const playAgain = document.querySelector("#btnPlay");
canvas.width = 505;
canvas.height = 606;
doc.body.appendChild(canvas);

playAgain.addEventListener("click", function() {
  modal.style.display = "none";
  player.reset();
  player.win = false;
  main();
});
```

All this in the Engine function.
