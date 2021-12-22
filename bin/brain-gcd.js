import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = greeting();

console.log('Find the greatest common divisor of given numbers.');

const brainGcd = () => {

for(let i = 0; i < 3; i += 1){
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const firstNumber = getRandomNumber(0, 100);
const secondNumber = getRandomNumber(0, 100);

const givenVariant = `${firstNumber}  ${secondNumber}`;
console.log(givenVariant);

const getGcd = () => {
const min = Math.min(firstNumber, secondNumber);
const max = Math.max(firstNumber, secondNumber);
let gcd;

if(max % min === 0){
gcd = min
}
for(let i = min; i > 0; i -= 1){
    if(max % i === 0 && min % i === 0){
        gcd = i;
        break;
    }
}
return gcd;
};

const correctAnswer = getGcd();

const guess = parseInt(readlineSync.question('Your answer: '), 10);

if (guess === correctAnswer){
    console.log('Correct!');
}if (guess !== correctAnswer) {
    console.log(`${guess} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}`);
    return 0;
}

}
};
brainGcd();