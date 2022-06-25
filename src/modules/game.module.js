import {Module} from '../core/module'

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    document.body.innerHTML = `
    <div class="gameContainer">
      <h1>Number guessing game</h1>
  
      <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
  
      <div class="form">
        <label for="guessField">Enter a guess: </label>
        <input type="text" id="guessField" class="guessField">
        <input type="submit" value="Submit guess" class="guessSubmit">
      </div>
  
      <div class="resultParas">
        <p class="guesses"></p>
        <p class="lastResult"></p>
        <p class="lowOrHi"></p>
      </div>
  
      <div>
          <button class="closeButton">close</button>
      </div>
    </div>
    `
    let randomNumber = Math.floor(Math.random() * 100) + 1
  
    const guesses = document.querySelector('.guesses')
    const lastResult = document.querySelector('.lastResult')
    const lowOrHi = document.querySelector('.lowOrHi')
  
    const guessSubmit = document.querySelector('.guessSubmit')
    const guessField = document.querySelector('.guessField')
  
    let guessCount = 1
    let resetButton
  
    guessField.focus()
  
    function checkGuess() {
      const userGuess = Number(guessField.value);
      if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
      }
      guesses.textContent += userGuess + ' ';
    
      if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }
      }
      guessCount++;
      guessField.value = '';
      guessField.focus();
    }
  
    guessSubmit.addEventListener('click', checkGuess)
  
    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.append(resetButton);
      resetButton.addEventListener('click', resetGame);
    }
  
    function resetGame() {
      guessCount = 1;
  
      const resetParas = document.querySelectorAll('.resultParas p');
      for (const resetPara of resetParas) {
        resetPara.textContent = '';
      }
  
      resetButton.parentNode.removeChild(resetButton);
  
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();
  
      lastResult.style.backgroundColor = 'white';
  
      randomNumber = Math.floor(Math.random() * 100) + 1;
    }
  
    
    const closeBtn = document.querySelector('.closeButton')
    closeBtn.addEventListener('click', (event) => {
      if(event){
        const deleteGame = document.querySelector('.gameContainer')
        deleteGame.remove()
      }
      
    })
  }
}




