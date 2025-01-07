import React, { useReducer, useState } from 'react';
const anything = (state,action) => {
    console.log("State", state, "Action",action);
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        default:
            break;
    }
}


const UseReducerFunctionalCompo = () => {
    // const [count, setCount] = useState(0);
    // const increment = () => {
    //     setCount(count + 1);
    // }

    // const decrement = () => {
    //     setCount(count - 1);
    // }
    const [state, dispatch] = useReducer(anything, { count: 0 })
    return (
        <>
            <h1>UseReducer Hook in ReactJs</h1>
            <p>useReducer is a React Hook that lets you add a reducer to your component.</p>
            <p><strong>Syntax:</strong>const [state, dispatch] = useReducer(reducer, initialArg, init?)</p>
            <p>Call useReducer at the top level of your component to manage its state with a reducer.</p>
            <p>useReducer(reducer, initialArg, init?)</p>
            <h4>Parameters </h4>
            <ul>
                <li><strong>reducer</strong> The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.</li>
                <li><strong>initialArg</strong> The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.</li>
                <li><strong>optional init:</strong> The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).</li>
            </ul>
            <h4>Returns</h4>
            <p>useReducer returns an array with exactly two values:</p>
            <ol>
                <li>The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).</li>
                <li>The dispatch function that lets you update the state to a different value and trigger a re-render.</li>
            </ol>

            {/* <button className="btn btn-sm btn-success" onClick={increment}>+</button>
            <h2>{count}</h2>
            <button className='btn btn-sm btn-danger' onClick={decrement}>-</button> */}
            {/* <button className='btn btn-sm btn-success' onClick={dispatch({type : "INCREMENT"})}>+</button> */}
            <button className='btn btn-sm btn-success' onClick={()=>{dispatch({type : "INCREMENT"})}}>+</button>
            <span>{state.count}</span>
            <button className='btn btn-sm btn-danger' onClick={()=>{dispatch({type : "DECREMENT"})}}>+</button> 
            {/* <button className='btn btn-sm btn-success' onClick={dispatch({type : "INCREMENT"})}>+</button>
            <span>{state.count}</span>
            <button className='btn btn-sm btn-danger' onClick={dispatch({type : "DECREMENT"})}>+</button> */}
        </>

    );
};

export default UseReducerFunctionalCompo;