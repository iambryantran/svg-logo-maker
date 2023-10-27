// This is the Command Line Interface (CLI) for the SVG Logo Maker using Inquirer.js.

const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

// Questions Array for Inquirer
const questions = [
  {
    type: "list",
    message: "Text (3 characters max): ",
    name: "text",
  },
  {
    type: "list",
    message: "Text Color: ",
    name: "textColor",
    choices: ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white"],
  },
  {
    type: "list",
    message: "Shape: ",
    name: "shapeType",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "list",
    message: "Shape Color: ",
    name: "shapeColor",
    choices: ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white"],
  },
];

class CLI {
  run() {

    // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user

    const askUser = async () => {
      try {
        const userResponse = await inquirer.prompt(questions);
        console.log(userResponse);
      } catch (err) {
        console.log(err);
      }
    }

    // TODO: Create a shape object based on inquirer data
    if (userResponse.shapeType === "Circle") {
      const shape = new Circle(userResponse.shapeColor);
    } else if (userResponse.shapeType === "Triangle") {
      const shape = new Triangle(userResponse.shapeColor);
    } else if (userResponse.shapeType === "Square") {
      const shape = new Square(userResponse.shapeColor);
    }
    
    // TODO: Create a svg object and set text and textColor using user Data
    const svg = new SVG();
    // TODO: Set svg shape with shape object created above

    // TODO: Write your svg file

  }
}

module.exports = CLI;
