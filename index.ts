import inquirer from "inquirer";
import inquire from "inquirer";

let todos: string[] = [];
let loop = true;

while (loop) {
  const answers: {
    TODO: string;
    addmore: boolean;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: "What do you want to add in your todo? ",//This will print on screen!
    },
    {
      type: "confirm",
      name: "addmore",
      message: "Do you want to Add more todo?",//This will print on screen!
      default: false,
    },
  ]);
  const { TODO, addmore } = answers;
  console.log(answers);
  loop = addmore;
  if (TODO) {
    todos.push(TODO);
  } else {
    console.log("Kindly add valid input");
  }
}

if (todos.length > 0) {           //This will execute when let todos lenght is less then 0!!!
  console.log("Your Todo list: ");//This will print on screen!!
  todos.forEach((todo) => {
    console.log(todo); //This will print when the todes for each task met the condition!!!!
  });
} else {
  console.log("No Todos found");//This will execute wheen all of the above conditions doesnt met !!!!!!
}
 



// This project is completed on march 28 5:24am 
