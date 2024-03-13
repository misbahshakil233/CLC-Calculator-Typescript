
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
   let rainbowTitle= chalkAnimation.rainbow('Start calcualtion');
await sleep();
rainbowTitle.stop()
console.log(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|



`);


}
await welcome();

async function askQuestion() {
   await inquirer
    .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2:"
        }
    ])
    .then((answers) => {
        if (answers.operator === "Addition") { // Corrected the typo here
            console.log((`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
else if(answers.operator === "Subtraction"){
    console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
}

else if(answers.operator === "Multiplication"){
    console.log(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`);
}


else if(answers.operator === "Division"){
    console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
}




    });
}

// askQuestion();

async function startAgain() {
    do{
        await askQuestion()
      var again= await inquirer.prompt({
          type:"input" ,
          name:"restart",
          message:"Do you want to continue? press y or n:"

        })
    }while(again.restart =='y'|| again.restart=='Y'||again.restart=='yes')

}
startAgain();


//question solve

// Define a generic function that operates on arrays of any type
//function processArray<T>(array: T[]): T[] {
    // Perform some processing on the array
    // For demonstration, let's just return the reversed array
   // return array.reverse();
//}

// Test the function with an array of numbers
// const numbers: number[] = [1, 2, 3, 4, 5];
// const reversedNumbers: number[] = processArray(numbers);
// console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// // Test the function with an array of strings
// const strings: string[] = ["hello", "world"];
// const reversedStrings: string[] = processArray(strings);
// console.log(reversedStrings); // Output: ["world", "hello"]

//2nd

// async function fetchUserData() {
//     try {
//         // Make the API call
//         const response = await fetch('https://api.example.com/user');
        
//         // Check if the response is successful
//         if (!response.ok) {
//             throw new Error('Failed to fetch user data');
//         }
        
//         // Parse the JSON response
//         const userData = await response.json();
        
//         // Log the user data to the console
//         console.log(userData);
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// }

// Call the function to fetch and log user data
//fetchUserData();
