import React, { useContext } from 'react';
import {Context} from './05UseContext';

const GrandChild = () => {
    const context = useContext(Context);
    return <div> From Grand Child {context.Data} </div>;
    // const user = useContext(UserContext);
    // return (
    //     <>
    //     <p>Grand Child component : {props.DataFromParent}  </p>
    //     {user}
    //     </>
    // );
};

export default GrandChild;