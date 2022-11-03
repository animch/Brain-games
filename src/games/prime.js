import launchGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNumber = 1;
const maxNumber = 100;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const gameQuestion = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const startBrainPrime = () => {
  launchGame(gameRule, generateRound);
};

export default startBrainPrime;
