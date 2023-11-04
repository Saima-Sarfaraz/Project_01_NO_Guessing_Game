import inquirer from 'inquirer';
const systemGeneratedNO = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGusses",
        message: "Write your guess b/w 1 to 10: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNO, 'SYs');
if (userGuess === systemGeneratedNO) {
    console.log("yeaaa Your answer is correct \n You Win!");
}
else {
    console.log("Please try again Better luck next time!");
}
;
