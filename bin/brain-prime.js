import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/utils.js';

console.log('Welcome to the Brain Games!');

const name = greeting();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const getBrainPrime = () => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(0, 100);
    console.log(`Question:${num}`);

    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    // console.log(correctAnswer);

    const guess = readlineSync.question('Your answer: ');

    if (guess === correctAnswer) {
      console.log('Correct!');
    } if (guess !== correctAnswer) {
      console.log(`${guess} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};
getBrainPrime();
