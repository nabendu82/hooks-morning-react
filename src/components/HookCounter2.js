import React, { useState } from 'react';

const HookCounter2 = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevState => prevState + 1);
        }
    }

    return (
        <>
            <h2>Hook Count - {count}</h2>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </>
    )
};

export default HookCounter2;