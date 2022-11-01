import launchGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;
const minIndex = 0;
const maxIndex = 9;
const minNumber = 1;
const maxNumber = 100;
const minStepNumber = 2;
const maxStepNumber = 10;
const numIndex = getRandomNumber(minIndex, maxIndex);

const getProgression = () => {
  const step = getRandomNumber(minStepNumber, maxStepNumber);
  const numbers = [getRandomNumber(minNumber, maxNumber)];
  for (let i = 0; numbers.length < progressionLength; i += 1) {
    numbers.push(numbers[i] + step);
  }
  return numbers;
};

const getGameTask = () => {
  const progression = getProgression();
  const correctAnswer = String(progression[numIndex]);
  progression[numIndex] = '..';
  const gameQuestion = progression.join(' ');
  return [gameQuestion, correctAnswer];
};

const getBrainProgression = () => {
  launchGame(gameRule, getGameTask);
};

export default getBrainProgression;
