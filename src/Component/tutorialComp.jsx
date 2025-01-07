
import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Tutorialcompo = () => {
    return (<>

            <div className='container'>
            <div className='row'>

                <div className='col-6'>
                    <h3><Link to = "/example/classcomponent">Class Component</Link></h3>
                </div>
                <div className='col-6'>
                    <h3><Link to = "/example/functionalcomponent/*">Functional Component</Link></h3>
                </div>
            </div>
            </div>
            <Outlet></Outlet>
            <div></div>
    </>
    );
};

export default Tutorialcompo;