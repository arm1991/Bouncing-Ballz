const canvas = document.querySelector(".canvas");
const store = {
  domElements: {
    windowBackgroundImg: document.querySelector(".background-img"),
    canvas,
    context: canvas.getContext("2d"),
    worldLabels: document.querySelectorAll(".world-label"),
    ballLabels: document.querySelectorAll(".ball-label"),
  },
  elements: {
    balls: [],
    world: "",
    gravity: "",
    backgroundImg: "",
    lastTime: 0,
  },
};

export default store;
