# To-Do List Application

This is a simple command-line to-do list application built using Node.js and the `inquirer` package. The application allows users to add tasks to their to-do list and decide whether to add more tasks or not. At the end, it displays the list of tasks that have been added.

## Features

- Add tasks to your to-do list.
- Decide whether to add more tasks or finish adding tasks.
- View the list of tasks at the end.

## Requirements

- Node.js
- `inquirer` package

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   node index.js
   ```

2. Follow the prompts to add tasks to your to-do list. After adding each task, you will be asked if you want to add more tasks.

3. Once you choose not to add more tasks, the application will display the list of all tasks.

## Code Explanation

- **Imports**: The `inquirer` package is imported to handle user prompts and inputs.
- **Variables**: `todos` is an array to store the tasks. `loop` controls whether the application continues to prompt for more tasks.
- **Main Loop**: Continuously prompts the user to add a task and whether to add more tasks until the user decides to stop.
- **Validation**: Ensures that valid input is provided for tasks.
- **Display**: Outputs the final list of tasks or a message indicating that no tasks were found.

## Example

```bash
What do you want to add in your todo? Buy groceries
Do you want to Add more todo? true
What do you want to add in your todo? Walk the dog
Do you want to Add more todo? false
Your Todo list:
Buy groceries
Walk the dog
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*This project was completed on March 28 at 5:24 AM.*
```

