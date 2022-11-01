import launchGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 100;

const isGcd = (number1, number2) => {
  let modulo = number1 % number2;
  let newNumber1 = number1;
  let newNumber2 = number2;
  while (modulo !== 0) {
    newNumber1 = newNumber2;
    newNumber2 = modulo;
    modulo = newNumber1 % newNumber2;
  }
  return newNumber2;
};

const getGameTask = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const gameQuestion = String(`${number1} ${number2}`);
  const correctAnswer = String(isGcd(number1, number2));
  return [gameQuestion, correctAnswer];
};

const getBrainGcd = () => {
  launchGame(gameRule, getGameTask);
};

export default getBrainGcd;
