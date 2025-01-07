import React, { useState, useEffect } from 'react';

const WindowResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[]);
    return (
        <>
            <div>
            <h4>Example: Resize Window Width</h4>
                <h6>Window width : {windowWidth} px</h6>
            </div>
        </>
    );
};

export default WindowResizeComponent;