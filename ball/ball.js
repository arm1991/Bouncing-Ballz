// ball images
import { ballImages } from "../config/config.js";
import { getItem } from "../helpers/helpers.js";

class Ball {
    constructor(x, y, id) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.direction = "down";
        this.velocityY = 0;
    }

    removeAnimation() {
        // animation of removed ball. it smoothly goes down
        this.y += 1;
    }

    changePosition({acceleration, deltaTime}) {
        this.velocityY +=
            this.direction === "down" ? acceleration : acceleration * -1;
        let distance =
            0.5 * acceleration * deltaTime * deltaTime +
            this.velocityY * deltaTime;

        this.y += this.direction === "down" ? -distance : distance;
    }

    changeDirection(CANVAS_HEIGHT) {
        if (this.direction === "down") {
            this.direction = "up";
            // to set the ball to the bottom of the web page it may go under;
            this.y = CANVAS_HEIGHT - this.height;
            // to lose velocity after hitting the bottom
            this.velocityY *= this.bounceEffect;
        } else if (this.direction === "up") {
            this.direction = "down";
        }
    }
}

class Pingpong extends Ball {
    constructor(x, y, id) {
        super(x, y, id);
        this.img = getItem({ name: "pingpong", items: ballImages }).img;

        // it is for loosing velocity after hitting the bottom multiplying it with velocity
        this.bounceEffect = 0.7;

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
        this.img = getItem({ name: "basketball", items: ballImages }).img;
        this.bounceEffect = 0.4;
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
        this.img = getItem({ name: "football", items: ballImages }).img;
        this.bounceEffect = 0.6;
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
        this.img = getItem({ name: "tennis", items: ballImages }).img;
        this.bounceEffect = 0.65;
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
        this.img = getItem({ name: "bowling", items: ballImages }).img;
        this.bounceEffect = 0.2;
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

export const getRandomBall = ({ x, y, id }) => {
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
    return new randomBalls[randomIndex](x, y, id);
};
