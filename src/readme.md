# Eight Ball

This project is a simulation of the classic kid's toy, the Magic Eight Ball. The application is built using React and consists of two main components: `App` and `EightBall`.

## Components

### App

A simple component that just renders an `EightBall` component.

### EightBall

The `EightBall` component takes a single property, `answers`, which is an array of objects. Each object has a key for `msg` and `color`. The `EightBall` component has a state to keep track of the current color and message text, which initially are "black" and "Think of a Question" respectively. When the ball is clicked, it chooses a random message and changes the background color of the ball and the message.

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone https://github.com/username/eight-ball.git`
2. Navigate to the project directory: `cd eight-ball`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`

## Usage

To use the application, simply click on the eight ball. It will display a random message and change color. To reset the eight ball, click the "Reset" button.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.