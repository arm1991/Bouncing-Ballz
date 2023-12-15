import { getRandomBall, disappearBall, setClassValue } from "./ball/ball.js";
import {
  checkBottom,
  checkVelocity,
  checkStop,
  clearCanvas,
  removeBall,
  drawCanvas,
  getWorld,
  changeBallLabelClass,
  changeWorldLabelClass,
} from "./helpers/helpers.js";

import store from "./store/store.js";
import { worldsData } from "./config/config.js";

// destructurisation of store elements
const { windowBackgroundImg, canvas, context, worldLabels, ballLabels } =
  store.domElements;
let { balls, world, gravity, backgroundImg, lastTime } = store.elements;

// to set all classes properties to appear after click on canvas
setClassValue();

// get default set world data
getData("earth", worldsData);

const renderGame = (ctx, balls, canvas) => {
  clearCanvas(ctx, canvas);
  drawCanvas(ctx, balls, canvas, backgroundImg);
};

const updateGame = (deltaTime, canvas, gravity) => {
  balls.forEach((ball) => {
    ball.changeVelocity(gravity);
    if (checkStop(ball, canvas.height)) {
      // if the ball is stopped
      ball.removeAnimation(deltaTime, gravity);
      if (ball.y - ball.height > canvas.height) {
        // if the removing animation is over
        balls = removeBall(balls, ball.id);
      }
    } else if (checkVelocity(ball) || checkBottom(ball, canvas.height)) {
      // if it stopped or hit the bottom of page
      ball.changeDirection(canvas.height);
    }
    ball.changeCordinates(deltaTime, canvas.height);
  });
};

function tick(currentTime) {
  // convert to milliseconds
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  renderGame(context, balls, canvas);
  updateGame(deltaTime, canvas, gravity);
  requestAnimationFrame(tick);
}

// to start the game afterthe background appears
backgroundImg.onload = function () {
  changeCanvasSize(canvas, context);
  requestAnimationFrame(tick);
};

canvas.addEventListener("click", (e) => {
  if (balls.length < 15) {
    const randomBall = getRandomBall(
      e.offsetX,
      e.offsetY,
      Math.floor(Math.random() * Date.now())
    );

    // to check if the playere selected at least one ball
    if (randomBall) {
      balls.push(randomBall);
    } else {
      return;
    }
    renderGame(context, balls, canvas);
  }
});

worldLabels.forEach((label) => {
  label.addEventListener("click", (e) => {
    // add active class to label
    changeWorldLabelClass(e.target, worldLabels);
    // to get the new data of world
    getData(e.target.id, worldsData);
  });
});

ballLabels.forEach((label) => {
  label.addEventListener("click", (e) => {
    // add active class to label
    changeBallLabelClass(e.target);
    // change class property if player unselected or selected the ball
    disappearBall(e.target.id);
  });
});

function getData(label, worldsData) {
  world = getWorld(label, worldsData);
  gravity = world.gravity;
  backgroundImg = world.img;
  windowBackgroundImg.style.backgroundImage = `url("${world.img.src}")`;
}

function changeCanvasSize(canvas) {
  canvas.width = window.innerHeight;
  canvas.height = window.innerHeight;
}
