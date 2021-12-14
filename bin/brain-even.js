import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
// check if the number is even, returns boolean
const brainEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    // const correctAnswer; (uses isEven with the random number, if it returns true,
    // correctAnswer is 'yes', otherwise 'no')
    console.log(`Question: ${randomNumber}`);

    const guess = readlineSync.question('Your answer: ');
    // here you check variable guess with variable correctAnswer, if they match,
    // loop starts over ('Correct!'), otherwise FAIL and end of game.
    if (guess === correctAnswer) {
      console.log('Correct!');
    } if (guess !== correctAnswer) {
      console.log(`${guess} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

brainEven();
