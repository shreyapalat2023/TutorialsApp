
import * as React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import './assets/CSS/App.css';
import router from "./router.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";


import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

    

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);







