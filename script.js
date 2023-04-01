'use strict';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'Правильно!';

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// console.log(document.querySelector('.number-input').value);

// document.querySelector('.number-input').value = 13;

// const eventHandler = function() {
//     console.log(document.querySelector('.number-input').value);
// } // можно присвоить к переменной
// let userName = prompt('Введите имя');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // создаем переменную, чтобы уменьшать количество очков
let highScore = 0;

// Ввводим функции для сокращения кода

const displayGuessMessage = function (message) {
    document.querySelector('.guess-message').textContent = message;
}

const displayQuestion = function (question) {
    document.querySelector('.question').textContent = question;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

const displayNumberInput = function (number) {
    document.querySelector('.number-input').value = number;
}

const displayBody = function (body) {
    document.querySelector('body').style.backgroundColor = body;
}

const displayQuestionStyle = function (questionStyle) {
    document.querySelector('.question').style.width = questionStyle;
}

const displayHighScore = function (highScore) {
    document.querySelector('.highscore').textContent = highScore;
}

document.querySelector('.check').addEventListener('click', function () { // передаем событие, при кликании будет выполняться функция
    const guessingNumber = Number(document.querySelector('.number-input').value); //поместить в number, чтобы дальше можно было сравнить числа
    // console.log(displayNumberInput, typeof displayNumberInput);
    // guessingNumber = displayNumberInput('');
    // const guessingNumber = Number(displayNumberInput()); // здесь не получилось заменить переменной, выводится NaN, нет значения

    console.log(guessingNumber, typeof guessingNumber);

    // No input
    if (!guessingNumber) { //если false, то код не будет выполняться, ноль тоже будет false и код не выполнится
        displayGuessMessage('Введите число!');

        // document.querySelector('.guess-message').textContent = 'Введите число!';

        // Player won
    } else if (guessingNumber === secretNumber) {
        displayGuessMessage('Правильно!');
        displayBody('rgb(9, 250, 21)');
        displayQuestionStyle('50rem');
        displayQuestion(secretNumber)

        // document.querySelector('.guess-message').textContent = `Правильно!`;
        // document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        // document.querySelector('.question').style.width = '50rem';
        // document.querySelector('.question').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            displayHighScore(highScore);
            // document.querySelector('.highscore').textContent = highScore;
        }


        // Number from input is wrong
    } else if (guessingNumber !== secretNumber) {
        if (score > 1) {
            displayGuessMessage(guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!');

            score--; // так же будем уменьшать на 1 очко, так как оба действия будут не правильными
            displayScore(score);

            // document.querySelector('.guess-message').textContent = guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
            //document.querySelector('.score').textContent = score; // присваиваем(подключаемся к score)

        } else {
            displayGuessMessage('Game over!');
            displayScore(0);

            // document.querySelector('.guess-message').textContent = `Game over!`;
            // document.querySelector('.score').textContent = 0;
        }
    }
    // Too high
    //  else if (guessingNumber > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.guess-message').textContent = 'Слишком много!';
    //         score--; // если неправильно, то будем уменьшать на 1 очко
    //         document.querySelector('.score').textContent = score; // присваиваем(подключаемся к score)
    //     } else {
    //         document.querySelector('.guess-message').textContent = `Game over!`;
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     // Too low
    // } else if (guessingNumber < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.guess-message').textContent = 'Слишком мало!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.guess-message').textContent = `Game over!`;
    //         document.querySelector('.score').textContent = 0;
    //     }


    // }
});

document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayBody('rgb(0, 0, 0)');

    displayQuestionStyle('25rem');
    displayQuestion('???')
    displayScore(score);
    displayGuessMessage('Начни угадывать!');
    displayNumberInput('')

    // document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    // document.querySelector('.question').style.width = '25rem';
    // document.querySelector('.question').textContent = '???';
    // document.querySelector('.score').textContent = score;
    // document.querySelector('.guess-message').textContent = `Начни угадывать!`;
    // document.querySelector('.number-input').value = '';


});
