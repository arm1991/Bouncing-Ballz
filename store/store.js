const canvas = document.querySelector(".canvas");
const store = {
  domElements: {
    windowBackgroundImg: document.querySelector(".background-img"),
    canvas,
    context: canvas.getContext("2d"),
    worldInputs: document.querySelectorAll(".world-input"),
    ballInputs: document.querySelectorAll(".ball-input"),
    worldLabels: document.querySelectorAll(".world-label"),
  },
  elements: {
    balls: [],
    world: "",
    gravity: "",
    backgroundImg: "",
    lastTime: 0,
    prevTime: performance.now(),
    CANVAS_HEIGHT: "",
    CANVAS_WIDTH: "",
  },
};

export default store;
