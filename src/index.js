#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getGameEngine = (specification, getTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(specification);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const [gameQuestion, correctAnswer] = getTask();
    console.log(`Question: ${gameQuestion}`);

    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
