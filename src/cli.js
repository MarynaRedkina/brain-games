import readlineSync from "readline-sync";
const greeting = () => { 
    const name = readlineSync.question('May I have your name? ');
console.log('Hi ' + name + '!');
}

export default greeting;
