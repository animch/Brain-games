import { getGameEngine, getRandomNumber } from '../index.js';

const specification = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getTask = () => {
  const number = getRandomNumber(1, 100);
  const gameQuestion = String(`${number}`);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const getBrainPrime = () => {
  getGameEngine(specification, getTask);
};

export default getBrainPrime;
