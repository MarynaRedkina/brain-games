import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/utils.js';

console.log('Welcome to the Brain Games!');

const name = greeting();

console.log('Find the greatest common divisor of given numbers.');

const getGcd = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let gcd;

  if (max % min === 0) {
    gcd = min;
  }
  for (let j = min; j > 0; j -= 1) {
    if (max % j === 0 && min % j === 0) {
      gcd = j;
      break;
    }
  }
  return gcd;
};

const brainGcd = () => {
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);

    const givenVariant = `${firstNumber}  ${secondNumber}`;
    console.log(givenVariant);

    const correctAnswer = getGcd(firstNumber, secondNumber);

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
brainGcd();
