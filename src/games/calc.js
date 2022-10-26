import { getGameEngine, getRandomArrayElement, getRandomNumber } from '../index.js';

const specification = 'What is the result of the expression?';

const getInstruction = (number1, number2, instruction) => {
  if (instruction === '+') {
    return number1 + number2;
  } if (instruction === '-') {
    return number1 - number2;
  } if (instruction === '*') {
    return number1 * number2;
  }
  return null;
};

const getTask = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const instruction = getRandomArrayElement(operators);
  const gameQuestion = String(`${number1} ${instruction} ${number2}`);
  const correctAnswer = String(getInstruction(number1, number2, instruction));
  return [gameQuestion, correctAnswer];
};

const getBrainCalc = () => {
  getGameEngine(specification, getTask);
};

export default getBrainCalc;
