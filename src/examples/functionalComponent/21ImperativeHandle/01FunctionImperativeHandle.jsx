import React, { useRef } from 'react';
import ButtonCompo from './02ButtonCompo.jsx';

const FunctionImperativeHandle = () => {
    const buttonRef = useRef(null);
    return (
        <>
            <div>
                <div className='text-center'>
                    <h1>Imperative Handle</h1>
                </div>


                <button className='btn btn-success' onClick={(event) => { buttonRef.current.alertToggle() }}>Click</button>

                <ButtonCompo ref={buttonRef} data="this will contains props data" />

                <p>useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.</p>

                <p>In React, data is passed from parent to child components via props, in what is known as unidirectional data flow. The parent component cannot directly call a function defined in the child component or reach down to grab a value for itself.</p>
                <p> In certain circumstances, we want our parent component to reach down to the child component, getting data that originates in the child component for its own use. We can achieve this type of data flow with the useImperativeHandle Hook, which allows us to expose a value, state, or function inside a child component to the parent component through ref. You can also decide which properties the parent component can access, thereby maintaining the private scoping of the child component.</p>

                <p className='alert alert-info'>useImperativeHandle(ref, createHandle, [dependencies])</p>
                <ul>
                    <li><code className=" prettyprinted" ><span className="kwd">ref</span></code>: The ref passed down from the parent component</li>
                    <li><code className=" prettyprinted" ><span className="pln">createHandle</span></code>: The value to be exposed to the parent component</li>
                    <li><code className=" prettyprinted" ><span className="pln">dependencies</span></code>: An array of values that cause the Hook to rerun when changed</li>
                </ul>
            </div>
            {/* Interview Queston Start */}
            {/* Questin one */}
            <h1>Interview Question</h1>

            <p><strong>1.What is useImperativeHandle in React?</strong></p>
            <p>useImperativeHandle is a hook in React that allows you to customize the instance value that is exposed when using ref in a parent component. This hook is primarily used to control what is accessible via a ref, enabling parent components to interact with child components in a more controlled manner.</p>
            {/* Question two */}
            <p><strong>2. When should you use useImperativeHandle?</strong></p>
            <p>useImperativeHandle should be used when you need to expose specific methods or properties from a child component to its parent component through a ref. It’s particularly useful when you need to manage complex interactions or when the child component's internal state or behavior needs to be controlled externally.</p>

            {/* Question three */}
            <p><strong>3.Can you explain the syntax of useImperativeHandle?</strong></p>
            <p>The useImperativeHandle hook takes three arguments:</p>
            <ol>
                <li><strong>ref</strong> A React ref object created by React.createRef() or useRef().</li>
                <li><strong>createHandle</strong>A function that returns an object with the methods or properties you want to expose.</li>
                <li><strong>[deps]</strong>An optional array of dependencies. The effect will re-run if any of these dependencies change.</li>
            </ol>

            {/* Question four */}
            <p><strong>4.How do you use useImperativeHandle with forwardRef?</strong></p>
            <p> useImperativeHandle is often used in conjunction with forwardRef to pass refs to functional components</p>

            {/* Interview Queston END */}

        </>
    );
};

export default FunctionImperativeHandle;