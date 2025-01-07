import React, {useState} from 'react';
import flowchart from "./controlledcompo.png"
import MultipleData from "./09multipledatahandle"

const FunctonalControlledCompo = () => {
    const [InpData, setData] = useState("")
    let getData = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setData(e.target.value)
    }
    return (
        <>
            <h3 className='text-center'>Controlled Component</h3>
            <p>In HTML, form elements such as
                &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().</p>
            <p>We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.</p>
            <img src={flowchart} />
            <p>In React, the Controlled Component pattern involves managing the component’s state through React’s state system. The component’s state is controlled and updated by React, and changes are reflected through props.</p>

            <p>This pattern allows for a more predictable and controlled flow of data in the application.</p>
            <p>Controlled Components are useful in situations you need a form handling, dynamic UI updates or stateful logics, also it's better for testing and debugging.</p> 
            <p>In simple terms we can say form data is controlled by react state. We have direct access to what user enters. That is why it is called controlled component.</p>
            <h3>Examaple:</h3>
            {InpData} <br/>
            <label htmlFor='username'/>Username:

            <input type='text' id='username' onChange={getData}/>
            <label htmlFor='password'/>Password:
            <input type='password' id = "password" onChange={getData}/>

            <MultipleData/>

        </>
    );
};

export default FunctonalControlledCompo;