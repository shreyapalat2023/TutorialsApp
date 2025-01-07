import React, {useState, useEffect}from 'react';

const DocumentTitleComponent = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return () => {
            document.title = "React App";
        }
    },[count])
    return (
        <>
           <div>
           <h4>Updating the Document Title</h4>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className= "btn btn-info">click me</button>
           </div> 
        </>
    );
};

export default DocumentTitleComponent;