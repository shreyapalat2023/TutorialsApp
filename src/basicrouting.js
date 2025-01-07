
import * as React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import './assets/CSS/App.css';

import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <HeaderMenu />
                <h3>This is home page</h3>
            </>

        ),
    },
    {
        path: "/About",
        element: (
            <>

                <HeaderMenu />
                <h3>This is about page</h3>
            </>
        ),
    },
    {
        path: "/Contact",
        element: (
            <>

                <HeaderMenu />
                <h3>This is contact page</h3>
            </>
        ),
    },

    {
        path: "about",
        element: <div>About</div>,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);







