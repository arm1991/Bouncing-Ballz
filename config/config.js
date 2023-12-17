// background images

const venusImg = new Image();
venusImg.src = "../assets/backgrounds/venus_background.png";

const uranusImg = new Image();
uranusImg.src = "../assets/backgrounds/uranus_background.png";

const jupiterImg = new Image();
jupiterImg.src = "../assets/backgrounds/jupiter_background.png";

const saturnImg = new Image();
saturnImg.src = "../assets/backgrounds/saturn_background.png";

const neptuneImg = new Image();
neptuneImg.src = "../assets/backgrounds/neptune_background.png";

const mercuryImg = new Image();
mercuryImg.src = "../assets/backgrounds/mercury_background.png";

const marsImg = new Image();
marsImg.src = "../assets/backgrounds/mars_background.png";

const earthImg = new Image();
earthImg.src = "../assets/backgrounds/earth_background.png";

const moonImg = new Image();
moonImg.src = "../assets/backgrounds/moon_background.png";

const plutoImg = new Image();
plutoImg.src = "../assets/backgrounds/pluto_background.png";

const worldsData = [
  {
    name: "mercury",
    img: mercuryImg,
    gravity: 223.44,
  },
  {
    name: "venus",
    img: venusImg,
    gravity: 535.08,
  },
  {
    name: "earth",
    img: earthImg,
    gravity: 588,
  },
  {
    name: "moon",
    img: moonImg,
    gravity: 99.96,
  },
  {
    name: "mars",
    img: marsImg,
    gravity: 223.44,
  },
  {
    name: "jupiter",
    img: jupiterImg,
    gravity: 1387.68,
  },
  {
    name: "saturn",
    img: saturnImg,
    gravity: 540.96,
  },
  {
    name: "uranus",
    img: uranusImg,
    gravity: 523.32,
  },
  {
    name: "neptune",
    img: neptuneImg,
    gravity: 658.56,
  },
  {
    name: "pluto",
    img: plutoImg,
    gravity: 35.28,
  },
];

// ball images

const tennis = new Image();
tennis.src = "../assets/balls/tennis.png";

const basketball = new Image();
basketball.src = "../assets/balls/basketball.png";

const football = new Image();
football.src = "../assets/balls/football.png";

const pingpong = new Image();
pingpong.src = "../assets/balls/pingpong.png";

const bowling = new Image();
bowling.src = "../assets/balls/bowling.png";

export { bowling, pingpong, football, basketball, tennis };
export { worldsData };
