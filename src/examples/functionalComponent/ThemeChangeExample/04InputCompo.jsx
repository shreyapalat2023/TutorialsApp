import React, {useContext} from 'react';
import {ThemeContext} from "./01mainFile";


const  InputCompo = (props) => {
    const inpcontext = useContext(ThemeContext);
    return (
        <>
           <input className={inpcontext.theme ? "form-control": "form-control text-bg-dark"} id="username" type="text" placeholder="Enter User Name" /> 
        </>
    );
};

export default InputCompo;