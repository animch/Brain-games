import launchGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 100;

const getGcd = (number1, number2) => {
  if (number1 === 0) {
    return number2;
  }
  return getGcd(number2 % number1, number1);
};

const generateRound = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const gameQuestion = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return [gameQuestion, correctAnswer];
};

const startBrainGcd = () => {
  launchGame(gameRule, generateRound);
};

export default startBrainGcd;
