import { useRoutes } from "react-router-dom";
import ClassCompoMenu from "./classcomponentmenu.jsx"
import ComponentInReact from "./componentinreact.jsx"
import ReactClassState from "./reactclassstate.jsx"
import ReactClassProps from "./reactclassprops.jsx"
import ReactClassConstructor from "./reactclassconstructor.jsx"
import ReactStateIncDec from "./reactstateincdec.jsx"
import LifeCycleCompo from "./StateAndLifeCycle.jsx"
import Footer from "../../FooterCompo.jsx";


const ClassComponentRoute = () => {

    const routes = useRoutes(
        [{

            path: "/",
            element: <>
                <ClassCompoMenu /><Footer />
            </>,
            children: [
                {

                    path: "classcomponentintro",
                    element: <ComponentInReact />
                },
                {

                    path: "classcomponentstate",
                    element: <ReactClassState />
                },
                {

                    path: "classcomponentprops",
                    element: <ReactClassProps />
                },
                {

                    path: "classcomponentcostructor",
                    element: <ReactClassConstructor />
                },
                {
                    path: "incdecstate",
                    element: <ReactStateIncDec />
                },
                {
                    path: "lifecycle",
                    element: <LifeCycleCompo />
                }
            ]
        }
        ]

    )
    return routes
}


export default ClassComponentRoute



