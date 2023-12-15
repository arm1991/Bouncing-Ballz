# Boucning Balls Web Game - Micro physics simulator in browser

## Overview

A web application using html5 canvas, where users can click on the screen to spawn a ball.
This ball realistically obey Earth-like gravity, moving vertically and bouncing upon hitting
the bottom of the screen, with a dampening effect on each bounce until it comes to a stop.

## Features

1. Interactive Canvas: Users can click to spawn bouncing balls.
2. Realistic Physics: Balls obey Earth-like gravity, bouncing and dampening upon hitting the ground.
3. Multiple Balls: Multiple balls can exist and interact simultaneously on the canvas.
4. World Selection: Choose different celestial bodies with their respective gravity settings.
5. Individual Ball Settings: Each ball type (pingpong, bowling, tennis, basketball, football) has its own gravity settings, affecting the bounce behavior uniquely.

## Game Loop

In this project I used a tick method. A 'tick' method updates game elements each frame,
using 'delta time' to ensure smooth motion regardless of frame rate for bette User Experience.

## Additional Features

- Optimization: Limited to a maximum of 15 balls on screen at a time.
- UI Interactions: Toggle ball appearances and choose celestial bodies.
- Aesthetics: Backgrounds and ball representations enhance visual experience.
- Realism: Gravity settings mimic real celestial bodies.

## Development Details

- The project primarily uses HTML5 Canvas, JavaScript, and images for visual elements.
- The codebase includes classes for different ball types, gravity settings for various worlds,
- and methods for rendering and updating the game.

## Installation

- Open your terminal or command prompt.
- Use the following command to clone the repository:

git clone https://github.com/arm1991/Bouncing-Ballz.git

## Open the Project in Visual Studio Code:

- Launch Visual Studio Code.
- Go to File -> Open Folder.
- Navigate to the cloned repository folder and select it.

## Installing Live Server Extension And Running Code:

https://www.youtube.com/watch?v=y4qqQeUDCBQ
