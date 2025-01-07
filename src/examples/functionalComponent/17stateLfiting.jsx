import React, { useState } from 'react';
import childComponent from "./18childComponent"

const StateLiftingFunctionalCompo = () => {
    const [statedata, setStateData] = useState();
    const parentFun = (data) => {
        console.log("called parent Function", data);
        setStateData(data);
    }

    return (
        <>
            <h1>State Lifting</h1>
            <p>Parent State: {statedata}</p>
            <childComponent title="testing" fun = {parentFun} />
            <p>In React, "lifting state up" refers to the practice of moving the state to a common ancestor component of the components that need to share or manage that state. This technique helps in maintaining a single source of truth and allows for easier state management and data flow between components.</p>
            <h5>When to lift State Up</h5>
            <p>You might find the need to lift state up when:</p>
            <ul>
                <li>Multiple components need to access or modify the same piece of state.</li>
                <li>You need to keep your components in sync.</li>
                <li>You want to avoid redundant or conflicting state in different parts of your component tree.</li>
            </ul>
            <h5>How to Lift State Up</h5>
            <ol>
                <li><strong>Identify the Common Ancestor:</strong>Find the closest common ancestor of all the components that need access to the shared state.</li>
                <li><strong>Move the State:</strong>Move the state to this common ancestor component.</li>
                <li><strong>Pass the State Down as Props:</strong>Pass the state and any necessary state-updating functions down to the child components via props.</li>
            </ol>
            {/* Interview Question Start */}
            <h1>Interview Question</h1>
            <p><strong>1.What is state lifting in React?</strong></p>
            <p> State lifting in React refers to the process of moving the state up to the closest common ancestor of components that need to share or manage that state. This allows multiple child components to access and modify the shared state through props passed down from the parent component.</p>

            {/* Questio two */}
            <p><strong>2.Why is state lifting used in React applications?</strong></p>
            <p>State lifting is used to manage shared state between components in a way that avoids prop drilling and ensures a single source of truth. It helps in maintaining the consistency of the state and makes it easier to manage and update shared data across multiple components.</p>
            {/* Interview Question End */}

            <h1></h1>
        </>
    );
};

export default StateLiftingFunctionalCompo;