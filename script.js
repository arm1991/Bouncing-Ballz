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
const {
  windowBackgroundImg,
  canvas,
  context,
  worldInputs,
  ballInputs,
  worldLabels,
} = store.domElements;
let {
  balls,
  world,
  gravity,
  backgroundImg,
  lastTime,
  prevTime,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} = store.elements;

// to set all classes properties to appear after click on canvas
setClassValue();

// get default set world data
getData("earth", worldsData);

const renderGame = (ctx, balls, CANVAS_WIDTH, CANVAS_HEIGHT) => {
  clearCanvas(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawCanvas(ctx, balls, CANVAS_WIDTH, CANVAS_HEIGHT, backgroundImg);
};

const updateGame = (deltaTime, gravity, CANVAS_HEIGHT) => {
  balls.forEach((ball) => {
    ball.changeVelocity(gravity, deltaTime);
    if (checkStop(ball, CANVAS_HEIGHT)) {
      // if the ball is stopped
      ball.removeAnimation(deltaTime, gravity);
      if (ball.y - ball.height > CANVAS_HEIGHT) {
        // if the removing animation is over
        balls = removeBall(balls, ball.id);
      }
    } else if (checkVelocity(ball) || checkBottom(ball, CANVAS_HEIGHT)) {
      // if it stopped or hit the bottom of page
      ball.changeDirection(CANVAS_HEIGHT);
    }
    if (checkBottom(ball, CANVAS_HEIGHT)) {
    }

    ball.changeCordinates(deltaTime, CANVAS_HEIGHT);
  });
};

function tick(currentTime) {
  // convert to milliseconds
  const dt = (performance.now() - prevTime) / 1000;
  prevTime = performance.now();
  // const deltaTime = (currentTime - lastTime) / 1000;
  // lastTime = currentTime;

  renderGame(context, balls, CANVAS_WIDTH, CANVAS_HEIGHT);

  updateGame(dt, gravity, CANVAS_HEIGHT);
  requestAnimationFrame(tick);
}

// to start the game after the background appears
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

ballInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    const label = document.querySelector(`[for="${e.target.id}"]`);

    // add active class to labe
    changeBallLabelClass(label);
    // change class property if player unselected or selected the ball
    disappearBall(e.target.id);
  });
});

worldInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    const label = document.querySelector(`[for="${e.target.id}"]`);

    // add active class to label
    changeWorldLabelClass(label, worldLabels);
    // to get the new data of world
    getData(e.target.id, worldsData);
  });
});

function getData(name, worldsData) {
  world = getWorld(name, worldsData);
  gravity = world.gravity;
  backgroundImg = world.img;
  windowBackgroundImg.style.backgroundImage = `url("${world.img.src}")`;
}

function changeCanvasSize(canvas) {
  canvas.width = CANVAS_WIDTH = window.innerHeight;
  canvas.height = CANVAS_HEIGHT = window.innerHeight;
}
