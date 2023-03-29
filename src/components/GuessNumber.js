import React, { useState, useRef } from 'react';
import style from './styles/GuessNumber.module.css'

const GuessLuckyNumberGame = () => {
    const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [guessCount, setGuessCount] = useState(0);
    const [message, setMessage] = useState('');

    const guessInputRef = useRef(null);

    const handleGuess = () => {
        const guess = parseInt(guessInputRef.current.value);
        setGuessCount(guessCount + 1);

        if (guess === luckyNumber) {
            setMessage(alert(`Congratulations! You guessed the right number in ${guessCount} attempts.`));
        } else if (guess < luckyNumber) {
            setMessage(alert('You guessed a smaller number.'));
        } else {
            setMessage(alert('You guessed a bigger number.'));
        }
    };

    const handleReset = () => {
        setLuckyNumber(Math.floor(Math.random() * 100) + 1);
        setGuessCount(0);
        setMessage('');
        guessInputRef.current.value = '';
    };

    return (
        <div className={style.guessLuckyNumberGame}>
            <h1>Guess the lucky number between 1 and 100:</h1>
            <input type="number" ref={guessInputRef} />
            <button onClick={handleGuess} className={style.guessButton}>Guess</button>
            <button onClick={handleReset} className={style.resetButton}>Reset</button>

        </div>
    );
};

export default GuessLuckyNumberGame;
