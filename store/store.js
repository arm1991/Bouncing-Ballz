const canvas = document.querySelector(".canvas");
const store = {
    domElements: {
        windowBackgroundImg: document.querySelector(".background-img"),
        canvas,
        context: canvas.getContext("2d"),
        worldInputs: document.querySelectorAll(".world-item__input"),
        ballInputs: document.querySelectorAll(".ball-item__input"),
        worldLabels: document.querySelectorAll(".world-item__label"),
    },
    elements: {
        balls: [],
        world: "",
        gravity: "",
        backgroundImg: "",
        lastTime: 0,
        CANVAS_HEIGHT: window.innerHeight,
        CANVAS_WIDTH: window.innerHeight,
    },
};

export default store;
