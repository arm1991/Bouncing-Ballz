export const checkBottom = ({ ball, CANVAS_HEIGHT }) => {
    // to check if the ball touched the ground
    return Math.ceil(ball.y + ball.height) >= CANVAS_HEIGHT;
};

export const checkVelocity = (ball) => {
    // check if the ball velocity is 0 or negative
    return Math.ceil(ball.velocityY) >= 0;
};

export const checkStop = ({ ball, CANVAS_HEIGHT }) => {
    // check if the ball stopped to remove it
    return checkVelocity(ball) && checkBottom({ ball, CANVAS_HEIGHT });
};

export const clearCanvas = ({ context, CANVAS_WIDTH, CANVAS_HEIGHT }) => {
    // clear previous canvas picture
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

export const removeBall = ({balls, id}) => {
    // return new array without ball that stopped
    return balls.filter((ball) => ball.id !== id);
};

export const drawCanvas = ({
    context,
    balls,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    backgroundImg,
}) => {
    // draw the canvas
    context.drawImage(backgroundImg, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    balls.forEach(({ x, y, img, width, height }) => {
        context.drawImage(img, x, y, width, height);
        context.closePath();
    });
};

export const changeBallLabelClass = (label) => {
    // if the ball label is active remove it else add the class active
    label.classList.toggle("active");
};

export const changeWorldLabelClass = ({ label, worldLabels }) => {
    // set active class to chosen world and remove active from previous world label
    worldLabels.forEach((label) =>
        label.classList.contains("active")
            ? label.classList.remove("active")
            : ""
    );
    if (!label.classList.contains("active")) {
        label.classList.add("active");
    }
};

export const changeCanvasSize = ({ canvas, CANVAS_WIDTH, CANVAS_HEIGHT }) => {
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
};

export const getImage = (path) => {
    const img = new Image();
    img.src = path;
    return img;
};

export const getItemByName = ({ name, items }) => {
    return items.find((item) => item.name === name);
};
