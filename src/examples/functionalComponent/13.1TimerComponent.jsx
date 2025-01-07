import React, {useState,useEffect} from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let intervalId;
        if(isActive) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }
        return () => {
            if(intervalId){
                clearInterval(intervalId);
            }
        }
    },[isActive]);

    const handleStart = () => {
        setIsActive(true);
    }

    const handleStop = () => {
        setIsActive(false);
    }


    return (
        <>
            <div>
            <h4>Timer Example with Start Stop</h4>
                <h5>Seconds elapsed: {seconds}</h5>
                <button onClick={handleStart} disabled = {isActive} className='btn btn-success'>Start</button>
                <button onClick={handleStop} disabled = {!isActive} className='btn btn-danger mx-3'>Stop</button>
            </div>
        </>
    );
};

export default TimerComponent;