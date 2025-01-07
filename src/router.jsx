import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// import { createRoot } from "react-dom/client";
import {
    // Outlet,
    // RouterProvider,
    createBrowserRouter
    // RouterProvider
} from "react-router-dom";
// import Tutorialcompo from "./Component/tutorialComp.jsx"
import HeaderCompo from "./Component/headerFile.jsx"
import ExampleCompo from "./Component/exampleComp.jsx"
import InterviewQuestionCompo from "./Component/InterviewQuestionCompo.jsx"
import { Suspense, lazy } from 'react';
// import ClassCompoRoute from "./examples/classComponent/classrouter.jsx"
// import FunctionCompoRoute from "./examples/functionalComponent/functionalrouter.jsx"
const ClassCompoRoute = lazy(() => { return import("./examples/classComponent/classrouter.jsx") });
const FunctionCompoRoute = lazy(() => { return import("./examples/functionalComponent/functionalrouter.jsx") });


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <div>
                    <HeaderCompo />
                    <h1>Hello world</h1>
                </div>
            </>
        ),
    },
    {
        path: "about",
        element: (
            <>
                <div>
                    <HeaderCompo />
                    <h1>About</h1>
                </div>
            </>
        )
    },
    {
        path: "contact",
        element: (
            <>
                <div>
                    <HeaderCompo />
                    <h1>Contact us</h1>
                </div>
            </>
        )
    },
    {
        path: "example",
        element: (

            <>
                <div>
                    {/* <HeaderCompo />,
                    <h1><Outlet/></h1> */}
                    <ExampleCompo />
                </div>
            </>
        ),
        children: [
            {
                path: "classcomponent/*",
                element:
                    (
                        <>

                            <div>
                                <Suspense fallback={<>Loading..</>}>
                                    <ClassCompoRoute />
                                </Suspense>
                            </div>
                        </>
                    )

            },
            {
                path: "functionalcomponent/*",
                element: (
                    <>

                        <div>
                            <Suspense fallback={<>Loading...
                            </>}>
                                <FunctionCompoRoute />
                            </Suspense>
                        </div>
                    </>
                )
            }
        ]

    },
    {
        path: "interviewquestion",
        element:
        <>

         <div>
            <HeaderCompo />

            <InterviewQuestionCompo />
        </div>
        </>

    }
]);
export default router;



// createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
// );



