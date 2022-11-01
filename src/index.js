#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from './cli.js';

export default (gameRule, getGameTask) => {
  const userName = getUserName();
  console.log(gameRule);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const [gameQuestion, correctAnswer] = getGameTask();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
