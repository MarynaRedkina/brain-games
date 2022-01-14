import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/utils.js';

console.log('Welcome to the Brain Games!');

const name = greeting();

console.log('What is the result of the expression?');

const getCorrectAnswer = (a, b, c) => {
  switch (b) {
    case '+':
      return a + c;
    case '-':
      return a - c;
    case '*':
      return a * c;
    default:
      console.log('Error');
  }
  return 0;
};

const brainCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    // const randomNumber = Math.floor(Math.random() * 100);
    // const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;hh
    // console.log(getRandomNumber(0, 100));

    const possibleOperators = ['+', '-', '*'];
    // const getOperator = (str) => str[getRandomNumber(0, 2)];
    // console.log(getOperator(operator));
    const operator = possibleOperators[getRandomNumber(0, possibleOperators.length - 1)];

    const firstNumber = getRandomNumber(0, 10);
    const secondNumber = getRandomNumber(0, 10);

    // const makeQuestion = () => `Question: ${firstNumber} ${operator} ${secondNumber}`;

    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);

    /* const getCorrectAnswer = () => {
      switch (operator) {
        case '+':
          return firstNumber + secondNumber;
        case '-':
          return firstNumber - secondNumber;
        case '*':
          return firstNumber * secondNumber;
        default:
          console.log('Error');
      }
      return 0;
    }; */

    const correctAnswer = getCorrectAnswer(firstNumber, operator, secondNumber);

    const guess = parseInt(readlineSync.question('Your answer: '), 10);

    if (guess === correctAnswer) {
      console.log('Correct!');
    } if (guess !== correctAnswer) {
      console.log(`${guess} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};

brainCalc();
