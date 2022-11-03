import launchGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 50;
const minIndex = 0;
const maxIndex = 2;

const calculateExpression = (number1, number2, instruction) => {
  switch (instruction) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown instruction: '${instruction}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const operators = ['+', '-', '*'];
  const instruction = operators[getRandomNumber(minIndex, maxIndex)];
  const gameQuestion = `${number1} ${instruction} ${number2}`;
  const correctAnswer = String(calculateExpression(number1, number2, instruction));
  return [gameQuestion, correctAnswer];
};

const startBrainCalc = () => {
  launchGame(gameRule, generateRound);
};

export default startBrainCalc;
