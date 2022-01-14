import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/utils.js';

console.log('Welcome to the Brain Games!');

const name = greeting();

console.log('What number is missing in the progression?');

const getBrainProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(0, 100);
    const increment = getRandomNumber(0, 5);
    const progressionLength = 10;
    const progression = [number];

    const getProgression = () => {
      for (let j = 0; j < progressionLength; j += 1) {
        progression.push(progression[j] + increment);
      }
      return 0;
    };
    getProgression();

    const randomIndex = getRandomNumber(0, 9);
    //  console.log(randomIndex);
    const correctAnswer = progression[randomIndex];
    //  console.log(correctAnswer);
    const substitutedNumber = '...';

    progression[randomIndex] = substitutedNumber;

    // console.log(progression);

    const string = progression.join(' ');

    console.log(`Question: ${string}`);

    const guess = parseInt(readlineSync.question('Your answer: '), 10);

    if (guess === correctAnswer) {
      console.log('Correct!');
    } if (guess !== correctAnswer) {
      console.log(`${guess} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      return 0;
    }
  }
  return 0;
};
getBrainProgression();
