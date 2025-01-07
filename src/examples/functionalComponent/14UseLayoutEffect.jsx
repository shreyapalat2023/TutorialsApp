import React, { useEffect, useState, useLayoutEffect } from 'react';

const UseLayoutEffectCompo = () => {
    const [counter, setCnt] = useState(0);
    const [secondState, anything] = useState(0);
    const [refreshStatus, SetRefreshStatus] = useState(true);

    useEffect(
        () => {
            console.log("called UseEffect");
            // getData();
            // setTimeout(() => {
            //     console.log("Delayed useeffect message after 2 seconds!");
            // }, 2000);
        }
    );

    // useLayoutEffect(() => {
    //     console.log("called useLayoutEffect");
    //     // Use setTimeour to update the message after 2000 milliseconds (2 seconds)

    //     const timeoutId = setTimeout(() => {
    //         console.log("Delayed UseLayoutEffect message after 2 seconds!");
    //     }, 2000);

    //     // Cleanup function to clear the timout if the component unmounts 
    //     // return () => clearTimeout(timeoutId)

    // }, []) // Empty Dependency array  ensures the effect runs only once

    // useLayoutEffect (() => {
    //     console.log("called useLayoutEffect");
    // })
    // useLayoutEffect(() => {
    //     console.log("called uselayoutEffect");
    // }, [refreshStatus])

    // useLayoutEffect(() => {
    //     console.log("called useLayoutEffect");
    // }, [])

    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
        return () => {
            console.log("called return");
        }
    },[counter])
    return (
        <>
        <h3>UseLayoutEffect Hook in ReactJs</h3>
        <p>The useLayoutEffect and useEffect hooks in React share similarities in function but differ when it comes to execution timing.</p>
        <p>if your effect is mutating the DOM (via a DOM node ref) and the DOM mutation will change the appearance of the DOM node between the time that it is rendered and your effect mutates it, then you don't want to use useEffect. You'll want to use useLayoutEffect. Otherwise the user could see a flicker when your DOM mutations take effect. This is pretty much the only time you want to avoid useEffect and use useLayoutEffect instead.</p>
        <p>This runs synchronously immediately after React has performed all DOM mutations. This can be useful if you need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating state.</p>
        <p>As far as scheduling, this works the same way as componentDidMount and componentDidUpdate. Your code runs immediately after the DOM has been updated, but before the browser has had a chance to "paint" those changes (the user doesn't actually see the updates until after the browser has repainted).</p>
            <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button> &nbsp;
            {/* <button onClick={() => { anything(secondState + 1) }}> Increment</button> */}

            <button onClick={() => { SetRefreshStatus(!refreshStatus) }}>Refresh</button>
        </>
    );
};

export default UseLayoutEffectCompo;