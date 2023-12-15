export const getWorld = (name, worlds) => {
  // get the chosen world from configs
  return worlds.find((world) => world.name === name);
};

export const checkBottom = (ball, canvasHeight) => {
  // to check if the ball touched the ground
  return Math.ceil(ball.y) >= Math.floor(canvasHeight - ball.height);
};

export const checkVelocity = (ball) => {
  // check if the ball velocity is 0 or negative
  return Math.ceil(ball.velocityY) <= 0;
};

export const checkStop = (ball, canvasHeight) => {
  // check if the ball stopped to remove it
  return checkVelocity(ball) && checkBottom(ball, canvasHeight);
};

export const clearCanvas = (ctx, canvas) => {
  // clear previous canvas picture
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const removeBall = (balls, id) => {
  // return new array without ball that stopped
  return balls.filter((ball) => ball.id !== id);
};

export const drawCanvas = (ctx, balls, canvas, backgroundImg) => {
  // draw the canvas
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  balls.forEach(({ x, y, img, width, height }) => {
    ctx.drawImage(img, x, y, width, height);
    ctx.closePath();
  });
};

export const changeBallLabelClass = (label) => {
  // if the label is active remove it else add the class active
  label.classList.toggle("active");
};

export const changeWorldLabelClass = (label, worldLabels) => {
  // set active class to chosen world and remove active from previous world label
  worldLabels.forEach((label) =>
    label.classList.contains("active") ? label.classList.remove("active") : ""
  );
  if (!label.classList.contains("active")) {
    label.classList.add("active");
  }
};
