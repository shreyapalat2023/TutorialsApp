import React from 'react';
// import {Context} from './05UseContext';
import GrandChild from './07GrandChild.jsx';
// const Context = createContext();


const Child5 = () => {
    // const anything = useContext(Context);
    // return <div>Context Data : {JSON.stringify(context) }</div>;
    // return <div>Context Data : {anything.Data }</div>;
    // return <div>Context Data : {context.data}</div>;
    //   };
    // const ChildCompoForUseContect = (props) => {
    //     const context = useContext(Context);

    return (
        <>
            {/* <p>Child component : {props.userData}</p> */}
            <p>Child component</p>
            <GrandChild />
            {/* <GrandChild DataFromParent={props.userData} /> */}
        </>
    );
};

export default Child5;