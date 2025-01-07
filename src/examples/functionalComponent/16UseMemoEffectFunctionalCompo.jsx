import React, { useMemo, useState } from 'react';

const UseMemoEffectFunctionalcompo = () => {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const factorial = useMemo(() => factorialOf(number), [number]);

    console.log("factorial", factorial);
    const onChange = event => {
        setNumber(Number(event.target.value));
    }

    const onClick = () => setInc(i => i + 1);

    return (
        <>
            <h3>UseMemoEffect in ReactJS</h3>
            <h4>Differences between useMemo and useCallback:</h4>
            <ol>
                <li>
                    <h5>Purpose:</h5>
                    <p>
                        <strong>useMemo</strong> is used to memoize values or computations, helping to optimize expensive calculations or data transformations.
                    </p>
                    <p>
                        <strong>useCallback</strong> is used to memoize callback functions, reducing unnecessary re-creation of functions and optimizing component re-renders.
                    </p>
                </li>
                <li>
                    <h5>Return Value:</h5>
                    <p>
                        <strong>useMemo</strong> returns memoized value itself.
                    </p>
                    <p>
                        <strong>useCallback</strong>returns the memoized callback function itself.
                    </p>
                </li>
                <li>
                    <h5>Use Scenario:</h5>
                    <p>
                        Use <strong>useMemo</strong> when you want to optimize and cache the result of a computation that depends on certain inputs. 
                    </p>
                    <p>
                        Use <strong>useCallback</strong>when you want to optimize the creation of callback functions that are passed to child components.
                    </p>
                </li>
            </ol>
            <div>
                <h5>Example:</h5>
                <p>Factorial of</p>
                <input type='number' value={number} onChange={onChange} />
                is {factorial}
                <button onClick={onClick}>Re-render</button> <br />
                <a href="https://dmitripavlutin.com/react-usememo-hook/">Reference</a>

            </div>
        </>
    );
};

function factorialOf(n) {
    console.log('factorialOf(n) called');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default UseMemoEffectFunctionalcompo;



