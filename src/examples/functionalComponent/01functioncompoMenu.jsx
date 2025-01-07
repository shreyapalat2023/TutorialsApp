import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionalCompoMenu = () => {
    return (

        <>
            <div className="row my-3">
                <div className="col offset-md-6">
                    <ol>
                        <li><Link to="functionalcomponentintro">Introduction</Link> </li>
                        <li><Link to="functionalcomponentstate">State</Link> </li>
                        <li><Link to="functionalcomponentprops">Props</Link> </li>
                        <li><Link to="reactjshooks">ReactJsHooks</Link></li>
                        <li><Link to="functionalcomponentusecontext">UseContext</Link> </li>
                        <li><Link to="stateexample">StateExample</Link> </li>
                        <li><Link to="controlledcomponent">Controlled Component</Link></li>
                        <li><Link to="uncontrolledcomponent">UnControlled Component</Link></li>
                        <li><Link to="userefhookfunctionalcompo">UseRef</Link></li>
                        <li><Link to="useeffectfunctionalcompo">UseEffect</Link></li>
                        <li><Link to="uselayouteffectfunctionalcompo">UseLayoutEffect</Link></li>
                        <li><Link to='usecallbackfunctionalcompo'>UseCallback</Link></li>
                        <li><Link to="usememofunctonalcompo">UseMemo</Link></li>
                        <li><Link to="statelfiting">StateLifting</Link></li>
                        <li><Link to="usereducer">UseReducer</Link></li>
                        <li><Link to="restvsspread">Rest Vs Spread</Link></li>
                        <li><Link to="strongpassword">Password Validation Example</Link></li>
                        <li><Link to="imperativehandle">Imperative Handle</Link></li>
                        <li><Link to="interviewtask">Interview Task</Link></li>
                    </ol>
                </div></div>
            <div className="container">
                <div className="col-6-text-center">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;