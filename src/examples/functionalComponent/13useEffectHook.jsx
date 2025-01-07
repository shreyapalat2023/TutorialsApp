import React, { useState, useEffect } from 'react';
import useeffectarguments from "./useEffect_hook_description.png"
import { json } from 'react-router-dom';
import TimerCompo from "./13.1TimerComponent";
import WindowResizeCompo from "./13.2WindowResizeComponent";
import DocumentTitleCompo from "./13.3DocumentTitleComponent"

const useEffectHook = () => {
    let [counter, setCounter] = useState(0);
    let [newuser, setNewUser] = useState("No");


    // Simple Effects without Cleanup or withour Dependency START

    // useEffect ( () => {
    //     console.log("useEffect called");
    // })
    // Simple Effects withour Cleanup or withour Dependency END

    // Effects withour Cleanup or with EmptyDependency START
    // useEffect(
    //     () => {
    //         console.log("useEffect called");
    //     }, []
    // )
    // Effects withour Cleanup or with EmptyDependency END

    // Effects withour CleanUp or with SpecialDependancy START
    // useEffect(
    //     () =>{
    //         console.log("useEffect called");
    //     }, [newuser]
    // );
    // Effects withour CleanUp or with SpecialDependancy END

    // Effects with Cleanup START
    useEffect(
        () => {
            console.log("useEffect Called");
            // Calling API set API Data into State

            return (
                () => {
                    // Remove API State Data as cleaning up
                    console.log("called function");
                }
            )
        }, [counter]
    )
    // Effects with Cleanup END


    return (
        <>
            <h1 className='text-center'>UseEffect Hook in ReactJs</h1>
            <p> The useEffect Hook allows you to perform side effects in your components.</p>
            <p> Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            <p> useEffect accepts two arguments. The second argument is optional.</p>
            <p> useEffect(&lt;function&gt;, &lt;dependency&gt;)</p>
            <img src={useeffectarguments} width={900} className='img-fluid img-thumbnail' />
            <p>just like constructor in class component we are going to be adopt that concept using useEffect() hook in functional component </p>
            <p>There are three stages of a lifecycle of a React component where we may want to run a side effect:</p>
            <ul>
                <li>On every render</li>
                <li>Only on initial render</li>
                <li>On initial render and anytime a certain dependency changes</li>
            </ul>
            <h3>On every render</h3>
            <p>By default, the effect stated in a useEffect hook runs when the component first renders and after every update. If we run the above code, we’ll notice the console.log() message is generated as our component is rendered.</p>
            <h3>Run effect Only on First render</h3>
            <p>The second argument of the useEffect hook is optional and is a dependency list that allows us to tell React to skip applying the effect only until in certain conditions. In other words, the second argument of the useEffect hook allows us to limit when the effect is to be run. If we simply place a blank empty array as the second argument, this is how we tell React to only run the effect on initial render.</p>
            <h3>Run Effect on First Render and Rerun When Dependency Changes</h3>
            <p>Instead of having an effect run once in the beginning and on every update, we can attempt to restrict the effect to run only in the beginning and when a certain dependency changes.</p>
            <p>Assume we wanted to fire off a console.log() message every time the value of a state property was to change. We can achieve this by placing the state property as a dependency of the effect callback.</p>

            <h3>Effects with Cleanup</h3>
            <p>Effects with Cleanup will be called where we leave that component</p>
            <p>Effects with Cleanup will helps to remove data from memory like we set some data by fetching API while calling useEffect and wants to remove that data from the states whlie we leave that component that time we can use cleanup</p>



            {/* Interview QUESTION START */}
            <h1>Interview Question</h1>
            {/* Question one */}
            <p><strong>1.What is the useEffect hook in React, and why is it used?</strong></p>
            <p>The useEffect hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, manually changing the DOM, and more. useEffect takes two arguments: a function containing the side effect logic and a dependency array that specifies when the effect should be re-run.</p>

            {/* Question two */}
            <p><strong>2.How does the dependency array in useEffect work?</strong></p>
            <p>The dependency array in useEffect determines when the effect should be re-run. If any value in the dependency array changes between renders, the effect will be re-executed. If the dependency array is empty, the effect runs only once after the initial render. If the dependency array is not provided, the effect runs after every render.</p>

            {/* Question Three */}
            <p><strong>3.How can you perform cleanup in useEffect?</strong></p>
            <p> You can perform cleanup in useEffect by returning a cleanup function from the effect. This function will be called when the component unmounts or before the effect runs again due to dependency changes.</p>
            {/* Question Four */}
            <p><strong>4.What are some common use cases for useEffect?</strong></p>
            <p>Common use cases for useEffect include:</p>
            <ul>
                <li>Fetching data from an API when the component mounts.</li>
                <li>Subscribing to a service or setting up a subscription.</li>
                <li>Manually manipulating the DOM.</li>
                <li>Setting up timers or intervals.</li>
                <li>Cleaning up subscriptions, timers, or other resources when the component unmounts.</li>
            </ul>

            {/* Question Five */}
            <p><strong>6.What happens if you omit the dependency array in useEffect?</strong></p>
            <p> If you omit the dependency array in useEffect, the effect will run after every render of the component. This can lead to performance issues if the effect contains expensive operations, as it will be re-executed unnecessarily on every render.</p>

            {/* Question Six */}
            <p><strong>7.How does useEffect compare to lifecycle methods in class components?</strong></p>
            <p>useEffect in functional components combines the functionality of several lifecycle methods in class components:</p>
            <ul>
                <li><strong>componentDidMount</strong>(runs on initial render)</li>
                <li><strong>componentDidUpdate</strong>(runs on every update)</li>
                <li><strong>componentWillUnmount</strong> (cleanup function runs on unmount)</li>
            </ul>
            <p>By using the dependency array, useEffect can mimic these lifecycle methods' behavior more flexibly in functional components.</p>

            {/* Interview QUESTION END */} 

            <h4>Example: Increment Decrement</h4>

            <button className='btn btn-sm btn-info' onClick={() => { console.log("called btn click"); setCounter(counter + 1) }}>Increment</button> &nbsp;

            <button className='btn btn-sm btn-danger' onClick={() => { console.log("called btn click"); setCounter(counter - 1) }}>Decrement</button> &nbsp;

            <button className='btn btn-sm btn-danger' onClick={() => { console.log("called btn click"); setNewUser("Yes") }}>Add</button> &nbsp;
            <p> Counter :{counter}</p>
            <p>New User?: {newuser}</p>
            <TimerCompo />
            <WindowResizeCompo/>
            <DocumentTitleCompo/>


        </>
    );
};

export default useEffectHook;