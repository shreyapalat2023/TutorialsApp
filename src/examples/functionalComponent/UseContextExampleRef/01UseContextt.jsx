import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';


const ThemeContext = createContext();

const UseContextExample = () => {
    const[theme,setTheme] = useState("light");
    return (
        <>
            Use Context Parent Data 
            <ThemeContext.Provider value={{theme}}>
                <FormCompo/>
            </ThemeContext.Provider>
        </>
    )
};

function FormCompo(params){
    return (
        <>
            ChildData
            <PanelForDisp>
                <button>Signup</button>
                <button>Signin</button>
            </PanelForDisp>
        </>
    )
}

function PanelForDisp(params) {
    const theme = useContext(ThemeContext)
    const customClass = "panel-" + theme;

    return (
        <>
            Grand child Data
            <div className={customClass}></div>
            testing
        </>
    );
};

export default UseContextExample

