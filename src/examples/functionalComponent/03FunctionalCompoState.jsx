import React, { useState } from 'react';
import TextForm from './03TextForm';

const FunctionalCompoState = () => {
    let [kaipan, setData] = useState("init val");
    let data = "testing"
    let changeData = () => {
        console.log("Called");
        data = "checking"
        setData("Change")
    }


    return (
        <>
            <h1 className='text-center'>States in Functional Component</h1>
            <h3>What is State in ReactJS?</h3>
            <p> The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.</p>
            <p> What does calling useState do? It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls —<code className='prettyprinted'><span className='pln'>useState </span></code> is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.</p>
            <p> What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)</p>
            <p> What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.</p>

            <h1>Interview Question</h1>
            <p><strong>1.Explain the difference between state and props in React.</strong></p>
            <p>A component's state is data that it owns and manages. It can be updated over time, and modifications will cause the component to re-render. Props are pieces of information that are transferred from a parent component to a child component. They are read-only, and the child component cannot change them.</p>

            <p><strong>2.What is the useState hook and how is it used?
            </strong></p>
            <p>The useState hook is used in React functional components to manage state. It lets you generate and read a state variable, as well as update the state variable.</p>

            <p>3.What are the different ways to update the state in React?</p>
            <p>In React, there are two primary methods for updating state:
                <ol>
                    <li>Using a class component's setState function.</li>
                    <li>Using a functional component's useState hook.</li>
                </ol></p>

            <p><strong>4. How do you share the state between components in React?
            </strong></p>
            <p>In React, there are many ways to transfer state between components:</p>
            <ul>
                <li>Props are passed from parent to child components.</li>
                <li>Making use of the Context API.</li>
            </ul>

            <p><strong>5.Write down the syntax of usestate.</strong></p>
            <p>const [state, setState] = useState(initialValue);</p>

            <p><strong>6.Difference between usestate and useref hook?</strong></p>
            <p>useState is used to create state variables that trigger re-renders when their values change.</p>
            <p>useRef is used to create a mutable reference that persists across re-renders and does not trigger re-renders when updated.</p>
            <p> Changing the state using setState triggers a re-render of the component.</p>
            <p>Updating the .current property of a ref does not trigger a re-render.</p>
            <p><strong>Usecases:</strong></p>
            <h6>UseState:</h6>
            <ul>
                <li>Storing and updating dynamic values that affect the rendering of the component.</li>
                <li>Managing form inputs, toggles, counters, etc.
                </li>
            </ul>
            <h6>UseRef:</h6>
            <ul>
                <li>Accessing and manipulating DOM elements directly.</li>
                <li>Storing mutable values that need to persist without causing re-renders (e.g., timers, previous state values).</li>
            </ul>

            <h2>Example</h2>

            <p>variable Data : {data}</p>
            <button onClick={changeData}>Change</button>
            <p>State Data : {kaipan}</p>
            <TextForm heading="Enter the text to analyze below" />
        </>
    );
};

export default FunctionalCompoState;