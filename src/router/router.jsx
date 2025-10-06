import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    Outlet,
    createBrowserRouter
} from "react-router-dom";
import { Suspense, lazy } from 'react';
import HeaderCompo from "../Component/Navbar/Navbar.jsx"
import HomePage from "../homePage.jsx";
import ExampleCompo from "../Component/exampleComp.jsx"
import InterviewQuestionCompo from "../Component/InterviewQuestionCompo.jsx"
import BasicQue from "../Component/Questions/RouterIntQuestion.jsx";
import RouterIntQuestion from "../Component/Questions/RouterIntQuestion.jsx";
import LazyLoadingIntQueCompo from "../Component/Questions/LazyLoadingIntQue.jsx";
import FooterCompo from "../FooterCompo.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/ContactUs.jsx";
import Footer from "../FooterCompo.jsx";
//quiz
import QuizNavbar from '../Component/Navbar/QuizNavbar.jsx';
import ReactQuiz from '../Component/Quiz/ReactQuiz.jsx';
const ClassCompoRoute = lazy(() => { return import("../examples/classComponent/classrouter.jsx") });
const FunctionCompoRoute = lazy(() => { return import("../examples/functionalComponent/functionalrouter.jsx") });


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <div>
                    <HeaderCompo />
                    <HomePage />
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
                    <About />
                    <FooterCompo />
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
                    <Contact />
                    <Footer />
                </div>
            </>
        )
    },
    {
        path: "example",
        element: (

            <>
                <div>
                    <HeaderCompo />,
                    {/* <h1><Outlet/></h1> */}
                    <ExampleCompo />
                    <FooterCompo />
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
                                <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>}>
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
                            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>}>
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
            (
                <>

                    <div>
                        <HeaderCompo />
                        <InterviewQuestionCompo />

                        <FooterCompo />
                    </div>
                </>
            ),
        children: [
            {
                path: "basicquestion/*",
                element: (
                    <><BasicQue /></>
                )
            },
            {
                path: "routerquestion/*",
                element: (
                    <><RouterIntQuestion /></>
                )
            },
            {
                path: "lazyquestion/*",
                element: (
                    <><LazyLoadingIntQueCompo /></>
                )
            },
        ]

    },
    {
        path: "quiz",
        element: (
            <>
                <div>
                    <HeaderCompo />
                    <QuizNavbar />
                    <Footer />
                </div>
            </>
        ),
        children: [
            {
                path: "react/",
                element: (<><ReactQuiz /></>)
            }
        ]
    },

]);
export default router;



// createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
// );



