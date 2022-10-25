import { getGameEngine, getRandomNumber } from '../index.js';

const specification = 'What number is missing in the progression?';

const getProgression = () => {
  const step = getRandomNumber(2, 10);
  const arrNumbers = [getRandomNumber(1, 100)];
  for (let i = 0; arrNumbers.length < 10; i += 1) {
    arrNumbers.push(arrNumbers[i] + step);
  }
  return arrNumbers;
};

const getTask = () => {
  const numIndex = getRandomNumber(0, 9);
  const progression = getProgression();
  const correctAnswer = String(progression[numIndex]);
  progression[numIndex] = '..';
  const gameQuestion = progression.join(' ');
  return [gameQuestion, correctAnswer];
};

const getBrainProgression = () => {
  getGameEngine(specification, getTask);
};

export default getBrainProgression;
