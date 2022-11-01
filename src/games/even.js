import launchGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxNumber = 50;

const isEven = (number) => number % 2 === 0;

const getGameTask = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const gameQuestion = String(`${number}`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const getBrainEven = () => {
  launchGame(gameRule, getGameTask);
};

export default getBrainEven;
