import React from 'react';
import HeaderCompo from "./headerFile"
import { Outlet, Link } from 'react-router-dom';

const exampleComp = () => {
    return (
        <>
            <HeaderCompo />,
            <div className='container'>
                <div className='row my-3'>
                    <div className='col'>
                        <p className='text-center'>Welcome to my tutorial</p>
                    </div>
                    <div className="row">
                    <div className="col-6">
                        <h3>
                            <Link to="classcomponent">Class Component</Link>
                        </h3>
                    </div>
                    <div className="col-6">
                        <h3><Link to="functionalcomponent">Functional Component</Link></h3>
                    </div>
                </div>
    

                </div>
            </div>
                <Outlet />
        </>
    );
};

export default exampleComp;