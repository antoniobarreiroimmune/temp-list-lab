import React, { useState } from "react";

const Timer = () => {
    const [timeLeft, setTimeRes] = useState(10); 
    const [timer, setTimer] = useState(null); 

    const startTimer = () => {
        if (!timer) {
            const newTimer = setInterval(() => {
                setTimeRes((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(newTimer); 
                        return 0; 
                    } else {
                        return prevTime - 1; 
                    }
                });
            }, 1000); 
            setTimer(newTimer); 
        }
    };

    const stopTimer = () => {
        if (timer) {
            clearInterval(timer); 
            setTimer(null); 
        }
    };

    const resetTimer = () => {
        stopTimer(); 
        setTimeRes(10); 
    };

    return (
        <div>
            <h1>Temporizador: {timeLeft > 0 ? timeLeft : '¡Tiempo agotado!'}</h1>
            <div>
                <button onClick={startTimer}>Iniciar</button>
                <button onClick={stopTimer}>Detener</button>
                <button onClick={resetTimer}>Reiniciar</button>
            </div>
        </div>
    );
};

export default Timer;
