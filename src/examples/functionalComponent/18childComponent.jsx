import React, {useState} from 'react';

const childComponent = (props) => {
    // const [state, setState] = useState("data");
    return (
        <>
        <div>
           {props.title}
           <input type='text' onChange={(e) => {props.func(e.target.value)} }/>
        </div>
            
        </> 
    );
};

export default childComponent;