# Magic Eight Ball Simulation

This project is a simulation of the classic kid's toy, the Magic Eight Ball. The application is built using React and consists of two main components: `App` and `EightBall`.

## Getting Started

To get a copy of the project up and running on your local machine for development and testing purposes, clone the repository and install the dependencies.

### Prerequisites

You need to have Node.js and npm installed on your machine. This project was built using Node.js version 14.15.1 and npm version 6.14.8.

### Installing

1. Clone the repository
```bash
git clone https://github.com/yourusername/magic-eight-ball.git


Navigate into the directory
cd magic-eight-ball

Install the dependencies
npm install


Start the development server
npm start

Project Description

Project Description
The Magic Eight Ball initially reads "Think of a Question". When you click on the ball, it chooses a random answer and the matching color for that answer.

The EightBall component takes a single property, answers, which is an array of objects, with each object having a key for msg and color. The EightBall uses state to keep track of the current color and message text, and this state is initially "black" and "Think of a Question".

When the ball is clicked on, it chooses a random message, which changes the background color of the ball and the message.

Further Study
If you have more time, here are some things to try out:

Reset: Add a button below the ball that will reset the ball back to its initial state.
Record Keeping: As you ask questions to the ball, display counts of the number of times the eight ball shows up as each of the three different colors.
Color Boxes: Show a series of 16 boxes (a box is just a square div with a background color). At the bottom of all of the boxes should be a button labeled "Change". Initially, each box should have a background color chosen from a random list of colors. When you click the button, it should select a random box and change the background color of that random box to a new color from the possible colors list.
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Your Edward Quansah


