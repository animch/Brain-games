import { getGameEngine, getRandomNumber } from '../index.js';

const specification = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => (number <= 2) || (number % 2 !== 0);

const getTask = () => {
  const number = getRandomNumber(1, 100);
  const gameQuestion = String(`${number}`);
  const correctAnswer = String(isPrime(number) ? 'yes' : 'no').toLowerCase();
  return [gameQuestion, correctAnswer];
};

const getBrainPrime = () => {
  getGameEngine(specification, getTask);
};

export default getBrainPrime;
