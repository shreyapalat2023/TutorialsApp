import React, { useRef, useState } from
    'react';
import ChildCompo from "./02childCompo";

const ParentCompoHoneyCom = () => {
    const [ele, setEle] = useState();
    const childRef = useRef();
    const parentFunction = async (data) => {
        console.log("called parentfunction update", data);
        await setEle(data);
    }
    return (
        <>
            Parent Component
            <button className='btn mx-2' onClick={() => childRef.current.getAlert()}>shuffle</button>
            {(ele && ele.length) ?
                <table>
                    <thead>
                        <tr>
                            <th>col-1</th>
                            <th>col-2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ele[0]}</td>
                            <td>{ele[1]}</td>
                        </tr>
                        <tr>
                            <td>{ele[2]}</td>
                            <td>{ele[3]}</td>
                        </tr>
                    </tbody>
                </table> : "no data"}
            <ChildCompo ref={childRef} onAddHandler={parentFunction} />
        </>
    );
};

export default ParentCompoHoneyCom;