// Генеруємо випадкове число від 1 до 100
//Math.floor - округлює число до меншого цілого, наприклад 3.79 = 3
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Лічильник спроб
let attempts = 0;

// Отримуємо кожен HTML елемент за його id
let guessInput = document.getElementById('guessInput'); //текстове поле для введення числа
let submitGuess = document.getElementById('submitGuess'); //кнопка "Перевірити"
let restartGame = document.getElementById('restartGame'); //кнопка "Почати знову"
let message = document.getElementById('message'); //  елемент, де будуть відображатися підказки
let attemptsDisplay = document.getElementById('attempts'); // елемент для відображення кількості спроб

// Функція для перевірки здогадки
submitGuess.addEventListener('click', function () {
  let userGuess = Number(guessInput.value); //guessInput.value - отримує текст, введений користувачем у полі введення
                                                                      //Number - перетворює текст на число

//Перевірка, чи те що ввів користувач є числом, !userGuess -> чи наше значення не порожнє
//  userGuess < 1 -> чи наше число не менше 1, userGuess > 100 -> чи наше число не більше 100
// || -> конкатенація = з'єднання рядків
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Будь ласка, введіть число від 1 до 100';
    guessInput.value = ''; // для зручності очищуємо поле для введення
    return;
  }

  attempts++; // Збільшуємо кількість спроб

// Функція завершення гри
function endGame() {
    guessInput.disabled = true; //робить поле введення неактивним
    submitGuess.disabled = true; //робить кнопку "Перевірити" неактивною
    restartGame.style.display = 'inline-block'; //робить кнопку "Почати знову" видимою
  }

  //Перевірка, якщо число яке ввів користувач збігається з тим яке було згенеровано -> вітаємо користувача і закінчуємо гру
  //Якщо число занадто велике - говоримо щоб спробував менше, якщо занадто мале - навпаки
  if (userGuess === randomNumber) {
    message.textContent = `🎉 Вітаємо! Ви вгадали число ${randomNumber} за ${attempts} спроб!`;
    endGame();
  } else if (userGuess > randomNumber) {
    message.textContent = 'Спробуй менше! ❄️';
  } else {
    message.textContent = 'Спробуй більше! 🔥';
  }

  attemptsDisplay.textContent = `Спроб: ${attempts}`; //оновлює текст у блоці attempts із кількістю спроб
  guessInput.value = ''; // для зручності очищуємо поле для введення
});

// Перезапуск гри
restartGame.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 100) + 1; // Генеруємо нове число
  attempts = 0; // Скидаємо спроби
  guessInput.disabled = false; //робить поле введення активним
  submitGuess.disabled = false; //робить кнопку "Перевірити" активною
  restartGame.style.display = 'none'; //приховує кнопку "Почати знову".
  message.textContent = '';  //очищує повідомлення про підказки.
  attemptsDisplay.textContent = ''; //очищує текст із кількістю спроб
  guessInput.value = ''; // очищує поле введення для нового старту гри
});
