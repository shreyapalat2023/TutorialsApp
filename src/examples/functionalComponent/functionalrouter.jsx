import { createBrowserRouter, useRoutes } from "react-router-dom";
import FunctionalCompoMenu from "./01functioncompoMenu.jsx"
import FunctionalCompoIntro from "./02FunctionalCompoIntro.jsx"
import FunctionalCompoState from "./03FunctionalCompoState.jsx"
import FunctionalCompoProps from "./04FunctionalCompoProps.jsx"
import FunctionalCompoUseContext from "./05UseContext.jsx"
import ChangeState from "./08UseState.jsx"
import Changetheme from "./ThemeChangeExample/01mainFile.jsx" 
import ChangeStateTheme from "./ThemeChangeExample/02mainFileTwo.jsx"
import ControlledCompo from "./09functonalControlledCompo.jsx"
import UncontrolledCompo from "./10functionalUncontrolledCompo.jsx"
import UseRefHookFunctionCompo from "./11UseRefHookFunction.jsx"
import ReactJsHooks from "./12HooksFunctionalCompo.jsx"
import UseEffectFunctionalCompo from "./13useEffectHook.jsx"
import UseLayoutEffectfunctonalCompo from "./14UseLayoutEffect.jsx"
import UseCallbackFunctionCompo from "./15UseCallbackHooksFuncCompo.jsx"
import UseMemoEffectCompo from "./16UseMemoEffectFunctionalCompo.jsx"
import StateLifting from "./17stateLfiting.jsx"
import UseReducerHook from "./19UseReducerFunctionalCompo.jsx"
import RestvsSpread from "./20RestVsSpread.jsx"
import StrongPasswordValidation from "./StrongPasswordValidation/01ParentFile.jsx"
import ImperativeHandleFunction from "./21ImperativeHandle/01FunctionImperativeHandle.jsx"
import LoginLogoutUseContextEx from "./LoginLogoutUseContext/01authContext.jsx"
import InterviewTask from "./HoneyCom/01ParentCompo.jsx"
import UseContextBooksDataCompo from "./BooksDataExample/BooksContext.jsx"
// import ComponentInReact from "./ComponentInReact.jsx"

const FunctionalComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "functionalcomponentintro",
                    element: <FunctionalCompoIntro />,
                }, {
                    path: "functionalcomponentstate",
                    element: <FunctionalCompoState />,
                }, {
                    path: "functionalcomponentprops",
                    element: <FunctionalCompoProps title = "The Alchemist" name = "Paulo Coehlo" year = {1993} total = "65 million "/>,
                }, {
                    path: "functionalcomponentusecontext",
                    element: <FunctionalCompoUseContext />,
                },
                {
                    path: "stateexample",
                    element: <ChangeState />
                },
                {
                    path: "functionalcomponentusecontext/usecontextchangetheme",
                    element: <Changetheme/>
                },
                {
                    path: "functionalcomponentusecontext/usestatechangetheme",
                    element: <ChangeStateTheme/>
                },
                {
                    path : "controlledcomponent",
                    element : <ControlledCompo/>
                },
                {
                    path : "uncontrolledcomponent",
                    element : <UncontrolledCompo/>
                },
                {
                    path : "userefhookfunctionalcompo",
                    element : <UseRefHookFunctionCompo/>
                },
                {
                    path : "reactjshooks",
                    element : <ReactJsHooks/>
                },
                {
                    path : "useeffectfunctionalcompo",
                    element : <UseEffectFunctionalCompo/>
                },
                {
                    path : "uselayouteffectfunctionalcompo",
                    element : <UseLayoutEffectfunctonalCompo/>
                },
                {
                    path : "usecallbackfunctionalcompo",
                    element : <UseCallbackFunctionCompo/>
                },
                {
                    path : "usememofunctonalcompo",
                    element : <UseMemoEffectCompo/>
                },
                {
                    path: "statelfiting",
                    element : <StateLifting/>
                },
                {
                    path : "usereducer",
                    element: <UseReducerHook/>
                },
                {
                    path : "restvsspread",
                    element : <RestvsSpread/>
                }, 
                {
                    path: "strongpassword",
                    element: <StrongPasswordValidation/>
                }, 
                {
                    path : "functionalcomponentusecontext/loginlogoutusecontext",
                    element: <LoginLogoutUseContextEx/>
                },
                {
                    path : "imperativehandle",
                    element : <ImperativeHandleFunction/>
                },
                {
                    path : "interviewtask",
                    element : <InterviewTask/>
                },
                {
                    path: "functionalcomponentusecontext/usecontextbooksdata",
                    element: <UseContextBooksDataCompo/>
                }
            ]
        }])
    return routes;
}



export default FunctionalComponentRoute;


