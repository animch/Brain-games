import { getGameEngine, getRandomNumber } from '../index.js';

const specification = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getTask = () => {
  const number = getRandomNumber(1, 50);
  const gameQuestion = String(`${number}`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const getBrainEven = () => {
  getGameEngine(specification, getTask);
};

export default getBrainEven;
