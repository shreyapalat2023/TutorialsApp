import React, { useRef } from 'react';
import flawChartUnctrolled from "./uncontrolledcompo.png";
const UncontrolledCompo = () => {
    let nameRef = useRef();
    let emailRef = useRef();
    function onSubmit(event) {
        event.preventDefault();
        console.log("Name:", nameRef.current.value);
        console.log("Email:", emailRef.current.value);
        return alert("submitted");
    }

    return (
        <>
            <h1 className='text-center'>Uncotrolled Component in React</h1>
            <p>We do not have direct access to what user enters.</p>
            <p>After studying the controlled components, it must be clear that the uncontrolled component react does not use state. Thus uncontrolled components do not depend on any state of input elements or any event handler. This type of component does not care about real-time input changes.</p>

            <img src={flawChartUnctrolled}></img>

            {/* Interview Questions */}
            <h1>Interview Questions</h1>
            {/* Question one */}
            <p><strong>1.What is an uncontrolled component in React?</strong></p>
            <p>An uncontrolled component is a component that manages its own state internally using the DOM, rather than through React's state management. In uncontrolled components, form data is handled by the DOM itself rather than being managed by the component's state. Typically, this is done using refs to access the form elements directly.</p>
            {/* Question two */}
            <p><strong>2.How do uncontrolled components differ from controlled components in React?</strong></p>
            <p>In uncontrolled components, the form data is handled by the DOM and accessed using refs. The component doesn't manage the input's value in its state. In contrast, controlled components use React's state to manage form data. The input's value is controlled by the component's state, and changes are handled through event handlers that update the state.</p>

            {/* Question Three */}
            <p><strong>3.How do you access the value of an input in an uncontrolled component?</strong></p>
            <p>You access the value of an input in an uncontrolled component using a ref.</p>

            {/* Question Four */}
            <p><strong>4. When might you choose to use an uncontrolled component over a controlled component?</strong></p>
            <p>You might choose to use an uncontrolled component when:</p>
            <ul>
                <li>You need a quick, simple form without complex validation.</li>
                <li>The form is not part of the core functionality, such as a search box.</li>
                <li>You are integrating with third-party libraries that manage their own state.</li>
                <li>You prefer the simplicity of using the DOM directly for simple forms.</li>
            </ul>

            {/* Question Five */}
            <p><strong>5. What are some advantages and disadvantages of using uncontrolled components?</strong></p>
            <p><strong>Advantages:</strong></p>
            <ul>
                <li>Simplicity: Less boilerplate code since you don't have to manage state for each input</li>
                <li>Performance: Potentially faster since you don't need to update React's state on each keystroke.</li>
            </ul>
            <p><strong>disadvantages:</strong></p>
            <ul>
                <li>Less React idiomatic: Doesn't leverage React's state management.</li>
                <li>Harder to validate: More challenging to implement complex validation logic.</li>
                <li>Less predictable: Form state is managed by the DOM, making it less predictable and harder to debug.</li>
            </ul>

            {/* Question Six */}
            <p><strong>6. How does using refs in uncontrolled components differ from using state in controlled components?</strong></p>
            <p>Using refs in uncontrolled components means the form data is stored in the DOM, and refs are used to read it. In controlled components, form data is stored in the component's state and updated via event handlers. Controlled components offer more control and make it easier to implement features like validation and conditional rendering, but they can involve more boilerplate code.</p>

            <h1>Example:</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" ref={nameRef} required />
                <input type="email" name="email" ref={emailRef} required />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default UncontrolledCompo;