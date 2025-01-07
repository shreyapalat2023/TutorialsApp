import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState("");
    const handleUpperCaseClick = () => {
        // console.log("handleUpperCaseClick was clicked");
        const newText = text.toUpperCase();

        setText(newText);
    }
    const handleLowerCaseClick = () => {
        const newText = text.toLowerCase();

        setText(newText);
    }
    const handleonchange = (event) => {
        // console.log("on Change was clicked");
        setText(event.target.value)
    }
    const handlClearClick = () => {
        const newText = ""
        setText(newText)
    }
    const handlCapitalizedClick = () => {
        const newText = text.split(" ");
        for(let i = 0; i < text.length; i++) {
            text[i] = text[i][0].toUpperCase() + text[i].substring(1);
        }
        setText(newText);
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div className=' container my-3'>
                <textarea className='form-control' id='myBox' rows="8" value={text} onChange={handleonchange}></textarea>
                <div className='my-3'>

                    <button className='btn btn-primary mx-2' onClick={handleUpperCaseClick}>Convert to Uppercase</button>

                    <button className='btn btn-primary mx-2' onClick={handleLowerCaseClick}>Convert to Lowercase</button>

                    <button className='btn btn-danger mx-2' onClick={handlClearClick}>Clear</button>

                    
                    <button className='btn btn-primary mx-2' onClick={handlCapitalizedClick}>Capitalized Case</button>
                </div>

            </div>
            <div className='container'>
                <h2>Your Text Summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters. </p>
                <p> {0.008 * text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>

        </>
    );
};

export default TextForm;