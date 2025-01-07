import React, { useState } from 'react';

const Example = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
        <h2 className='text-center'>Example of Usestate</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className='btn btn-success'>
                Click me
            </button>
        </div>
    );
}

export default Example