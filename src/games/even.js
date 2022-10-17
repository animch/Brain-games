import readlineSync from 'readline-sync';

const brainEven = () => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber(1, 50);
    console.log(`Question: ${number}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const getRightAnswer = () => (number % 2 !== 0 ? 'no' : 'yes');

    if ((number % 2 === 0 && yourAnswer === 'yes') || (number % 2 !== 0 && yourAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${getRightAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
};

export default brainEven;
