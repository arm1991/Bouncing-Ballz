// ball images
import {
  bowling,
  pingpong,
  football,
  basketball,
  tennis,
} from "../config/config.js";

class Ball {
  constructor(x, y, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.direction = "down";
    this.velocityY = 0;
  }

  removeAnimation(deltaTime, gravity) {
    // animation of removed ball. it smoothly goes down
    this.y += 1;
  }

  changeVelocity(gravity) {
    if (this.direction === "down") {
      this.velocityY += gravity + this.gravityFactor;
    } else if (this.direction === "up") {
      this.velocityY -= gravity + this.gravityFactor;
    }
  }

  changeCordinates(deltaTime) {
    // multiplying deltaTime for smoother animation
    const distacne = deltaTime * this.velocityY;
    if (this.direction === "down") {
      this.y += distacne * deltaTime;
    } else if (this.direction === "up") {
      this.y -= distacne * deltaTime * this.bounceEffect;
    }
  }

  changeDirection(canvasHeight) {
    if (this.direction === "down") {
      this.direction = "up";

      // to set the ball to the bottom of the web page it may go under;
      this.y = canvasHeight - this.height;

      // to lose velocity after hitting the bottom
      this.velocityY *= this.bounceEffect;
    } else if (this.direction === "up") {
      this.velocityY = 0;
      this.direction = "down";
    }
  }
}

class Pingpong extends Ball {
  constructor(x, y, id) {
    super(x, y, id);
    this.img = pingpong;

    // it is for loosing velocity after hitting the bottom multiplying it with velocity
    this.bounceEffect = 0.8;

    // for more real animation during fall. Each ball has its own property
    this.gravityFactor = 1.2;
    this.width = 30;
    this.height = 30;

    // for setting the image exactly where user clicked
    this.x -= this.width / 2;
    this.y -= this.height / 2;

    // we set it false then after unselecting it becomes true it is for chenging the balls
    this.disappear = Pingpong.disappear;
  }
}

class Basketball extends Ball {
  constructor(x, y, id) {
    super(x, y, id);
    this.img = basketball;
    this.bounceEffect = 0.5;
    this.gravityFactor = 1.5;
    this.width = 60;
    this.height = 60;
    this.x -= this.width / 2;
    this.y -= this.height / 2;
    this.disappear = Basketball.disappear;
  }
}

class Football extends Ball {
  constructor(x, y, id) {
    super(x, y, id);

    this.img = football;
    this.bounceEffect = 0.6;
    this.gravityFactor = 1.8;
    this.width = 60;
    this.height = 60;
    this.x -= this.width / 2;
    this.y -= this.height / 2;
    this.disappear = Football.disappear;
  }
}

class Tennis extends Ball {
  constructor(x, y, id) {
    super(x, y, id);
    this.img = tennis;
    this.bounceEffect = 0.7;
    this.gravityFactor = 0.8;
    this.width = 30;
    this.height = 30;
    this.x -= this.width / 2;
    this.y -= this.height / 2;
    this.disappear = Tennis.disappear;
  }
}

class Bowling extends Ball {
  constructor(x, y, id) {
    super(x, y, id);
    this.img = bowling;
    this.bounceEffect = 0.3;
    this.gravityFactor = 1.6;
    this.width = 50;
    this.height = 50;
    this.x -= this.width / 2;
    this.y -= this.height / 2;
    this.disappear = Bowling.disappear;
  }
}

const ballClasses = [Pingpong, Basketball, Football, Tennis, Bowling];

export const disappearBall = (name) => {
  // changing value of adding or removing ball in animation
  ballClasses.forEach((ballClass) => {
    if (ballClass.name === name) {
      ballClass.disappear = !ballClass.disappear;
    }
  });
};

export const setClassValue = () => {
  // setting initial value for adding or removing ball in animation
  ballClasses.forEach((ballClass) => {
    ballClass.disappear = false;
  });
};

export const getRandomBall = (x, y, id, width, height) => {
  const randomBalls = [];
  ballClasses.forEach((ballClass) => {
    // checking if the ball is selected or not if so
    // adding it to empty array initialized before for getting new ball
    !ballClass.disappear ? randomBalls.push(ballClass) : "";
  });
  // if there is no ball selected by user return false
  // little error handling
  if (randomBalls.length === 0) return false;
  const randomIndex = Math.floor(Math.random() * randomBalls.length);
  return new randomBalls[randomIndex](x, y, id, width, height);
};
