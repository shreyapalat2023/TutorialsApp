import React, { useCallback, useState } from 'react';
const funccount = new Set();

const UseCallbackHooksFuncCompo = () => {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    // const incrementCounter = () => {
    //     console.log("incrementCounter");
    //     setCount(count + 1);
    // }

    // const decrementCounter = () => {
    //     console.log("decrementCounter");
    //     setCount(count - 1);
    // }

    // const incrementNumber = () => {
    //     console.log("incrementNumber");
    //     setNumber(number +1);
    // }

    // const incrementcounter = useCallback (() => {
    //     setCount(count + 1);
    // })

    // const decrementCounter = useCallback (() => {
    //     setCount(count - 1);
    // })

    // const incrementNumber = useCallback(() => {
    //     setNumber(number + 1);
    // });


    // const incrementCounter = useCallback (() => {
    //     setCount(count + 1)
    // }, []);

    // const decrementCounter = useCallback (() => {
    //     setCount(count - 1);
    // }, []);

    // const incrementNumber = useCallback(() => {
    //     setNumber(number + 1)
    // }, []);

    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    const incrementNumber = useCallback(() => {
        setNumber(number + 1
        );
    }, [number]);

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    console.log(funccount);


    return (
        <>
            <h3>UseCallback Hook in ReactJs</h3>

            <p>Improving performance In React applications includes preventing unnecessary renders and reducing the time a render takes to propagate. useCallback() can help us prevent some unnecessary renders and therefore gain a performance boost.</p>
            <p>Going back to React, when a component re-renders, every function inside of the component is recreated and therefore these functions’ references change between renders.</p>
            <p> useCallback(callback, dependencies) will return a memoized instance of the callback that only changes if one of the dependencies has changed. This means that instead of recreating the function object on every re-render, we can use the same function object between renders.</p>
            <h4>When to use useCallback</h4>
            <ul>
                <li>When you have a function that gets redefined on every render.</li>
                <li>When you pass functions to child components that depend on props or state.</li>
                <li>To avoid unnecessary re-renders of child components.</li>
            </ul>

            {/* Question Answer START */}
            <h1>Question Answer:</h1>
            {/* Question one */}
            <p><strong>1. What is the useCallback hook in React, and why is it used?</strong></p>
            <p> The useCallback hook in React is used to memoize functions. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful to prevent unnecessary re-creations of functions, especially when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
            {/* Question two */}
            <p><strong>2. How does useCallback differ from useMemo?</strong></p>
            <p>Both useCallback and useMemo are hooks used for performance optimization in React. useCallback is used to memoize functions, whereas useMemo is used to memoize values.</p>
            {/* Question Three */}
            <p><strong>3. When should you use useCallback in a React component?</strong></p>
            <p>You should use useCallback in a React component when:</p>
            <ul>
                <li>You have a stable callback that is passed down to child components, and you want to prevent unnecessary re-renders of those child components.</li>
                <li>You want to avoid re-creating functions on every render, especially if the function is used as a dependency in other hooks like useEffect or useMemo.</li>
            </ul>
            {/* Question four */}
            <p><strong>4.How does the dependency array in useCallback work?</strong></p>
            <p>The dependency array in useCallback specifies the values that the memoized function depends on. The function will only be re-created if one of the values in the dependency array changes between renders. If the dependency array is empty, the function will be memoized once and never re-created.</p>
            {/* Question Answer END */}

            <h1>Example:</h1>

            <button className='btn btn-sm btn-success' onClick={incrementCounter}>Increment Count</button> &nbsp;
            <button className='btn btn-sm btn-danger' onClick={decrementCounter}>Decrement Counter</button> &nbsp;
            <button className='btn btn-sm btn-primary' onClick={incrementNumber}>Increase Number</button>
            <p className='my-5'>count : {count}, Number: {number}</p>
        </>
    );
};

export default UseCallbackHooksFuncCompo;