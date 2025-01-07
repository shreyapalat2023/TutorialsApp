import React from 'react';
import InputCompo from "./04InputCompo"

const FormCol = (props) => {
    return (
        <>
            <div className="row my-2">
                <div className="col">
                    <InputCompo theme = {props.theme}/>
                </div>
            </div>
        </>
    );
};

export default FormCol;