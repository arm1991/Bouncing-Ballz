import { getRandomBall, disappearBall, setClassValue } from "./ball/ball.js";
import {
    checkBottom,
    checkVelocity,
    checkStop,
    clearCanvas,
    removeBall,
    drawCanvas,
    getItem,
    changeBallLabelClass,
    changeWorldLabelClass,
    changeCanvasSize,
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
    acceleration,
    backgroundImg,
    lastTime,
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
} = store.elements;

// set default world data
getData({ name: "earth", worldsData });

const renderGame = ({ context, balls, CANVAS_WIDTH, CANVAS_HEIGHT }) => {
    clearCanvas({ context, CANVAS_WIDTH, CANVAS_HEIGHT });
    drawCanvas({ context, balls, CANVAS_WIDTH, CANVAS_HEIGHT, backgroundImg });
};

const updateGame = ({ deltaTime, acceleration, CANVAS_HEIGHT }) => {
    balls.forEach((ball) => {
        ball.changePosition({acceleration, deltaTime});
        if (checkStop({ ball, CANVAS_HEIGHT })) {
            // if the ball is stopped
            ball.removeAnimation();
            if (ball.y - ball.height > CANVAS_HEIGHT) {
                // if the removing animation is over
                balls = removeBall({ balls, id: ball.id });
            }
        } else if (
            checkVelocity(ball) ||
            checkBottom({ ball, CANVAS_HEIGHT })
        ) {
            // if it stopped or hit the bottom of page
            ball.changeDirection(CANVAS_HEIGHT);
        }
    });
};

function tick(currentTime) {
    // convert to milliseconds
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    renderGame({ context, balls, CANVAS_WIDTH, CANVAS_HEIGHT });

    updateGame({ deltaTime, acceleration, CANVAS_HEIGHT });
    requestAnimationFrame(tick);
}

// to start the game after the background appears
backgroundImg.onload = function () {
    // to set all classes properties to appear after click on canvas
    setClassValue();

    changeCanvasSize({ canvas, CANVAS_WIDTH, CANVAS_HEIGHT });
    requestAnimationFrame(tick);
};

// eventListeners

canvas.addEventListener("click", (e) => {
    if (balls.length < 15) {
        const randomBall = getRandomBall({
            x: e.offsetX,
            y: e.offsetY,
            id: Math.floor(Math.random() * Date.now()),
        });
        // to check if the player selected at least one ball
        if (randomBall) {
            balls.push(randomBall);
        } else {
            return;
        }
        renderGame({ context, balls, CANVAS_WIDTH, CANVAS_HEIGHT });
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
        changeWorldLabelClass({ label, worldLabels });
        // to get the new data of world
        getData({ name: e.target.id, worldsData });
    });
});

function getData({ name, worldsData }) {
    world = getItem({ name, items: worldsData });
    acceleration = world.acceleration;
    backgroundImg = world.img;
    windowBackgroundImg.style.backgroundImage = `url("${world.img.src}")`;
}
