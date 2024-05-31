import { getImage } from "../helpers/helpers.js";
// background images

const worldsData = [
    {
        name: "mercury",
        acceleration: -3.9,
    },
    {
        name: "venus",
        acceleration: -8.9,
    },
    {
        name: "earth",
        acceleration: -9.8,
    },
    {
        name: "moon",
        acceleration: -1.6,
    },
    {
        name: "mars",
        acceleration: -3.7,
    },
    {
        name: "jupiter",
        acceleration: -24.8,
    },
    {
        name: "saturn",
        acceleration: -10.5,
    },
    {
        name: "uranus",
        acceleration: -8.8,
    },
    {
        name: "neptune",
        acceleration: -11.2,
    },
];

worldsData.forEach((world) => {
    world.img = getImage(`../assets/backgrounds/${world.name}_background.png`);
});

// ball images

const ballImages = [
    "tennis",
    "basketball",
    "football",
    "football",
    "pingpong",
    "bowling",
].map((name) => {
    const img = getImage(`../assets/balls/${name}.png`);
    return { name, img };
});

export { ballImages, worldsData };
