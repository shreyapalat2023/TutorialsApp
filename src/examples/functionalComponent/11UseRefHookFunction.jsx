import react, { useState, useRef } from "react";

const UseRefHookFunctionalCompo = () => {
    const [data, anything] = useState(null);
    const focusPoint = useRef(null)
    const onClickHandler = (event) => {
        // console.log(focusPoint);
        // console.log(event);
        console.log(event.target);
        // console.log(event.target.value);
        console.log(focusPoint.current.value);
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    } 
    return (
        <>
        <h1 className="text-center">UseRef Hook in ReactJs</h1>
            <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
            <p>The useRef Hook allows you to persist values between renders.</p>
            <p>It can be used to store a mutable value that does not cause a re-render when updated.</p>
            <p>It can be used to access a DOM element directly.</p>
            <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.</p>
            <p>To avoid this, we can use the useRef Hook.</p>
            <div>
                <button onClick={onClickHandler}>ACTION</button>
            </div>
            <label>
                Click on the action button to focus and populate the text.
            </label> <br />
            <textarea ref={focusPoint} />
            <textarea onChange={(event) => {
                // console.log(event);
                // console.log(event.target)
                console.log(event.target.value);
                anything(event.target.value)
                // anything("test");
            }} />
            <br />
            {data}
        </>
    );
};

export default UseRefHookFunctionalCompo;