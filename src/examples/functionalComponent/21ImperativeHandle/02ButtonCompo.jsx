import React, { forwardRef, useImperativeHandle, useState} from 'react';
// import {Link} from "react-router-dom"

// const ButtonCompo = forwardRef((props,ref) => {
//     const [toggle,setToggle] = useState(false);
//     useImperativeHandle (ref, () => ({
//         alertToggle(){
//             console.log("called inside child compo btn");
//             setToggle(!toggle);
//         },
//     }));

const ButtonCompo = forwardRef( (props, ref) => {
    const [toggle,setToggle] = useState(false);
    useImperativeHandle(ref,() => ({
        alertToggle(){
            console.log("called inside child compo btn");
            setToggle(!toggle);
        }
    }))
    return (
        <>
            <p>Props : {props.data}</p>
            <p>this will contains child data : {toggle && <span>Toggle</span>}</p>

            <ol>
                <li><a href="https://www.dhiwise.com/post/best-practices-for-effectively-using-useimperativehandle-in-your-react-applications">Example</a></li>
                <li><a href="https://medium.com/@ahsan-ali-mansoor/ultimate-guide-for-useimperativehandle-hook-6fbc955d6ea0">Example</a></li>
                <li><a href="https://dev.to/anikcreative/react-hooks-explained-useimperativehandle-5g44">Example</a></li>
            </ol>
        </>
    );
});

export default ButtonCompo;