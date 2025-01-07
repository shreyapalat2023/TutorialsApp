
import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default class ClassComponMenu extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <ol>
                                <li><Link to="classcomponentintro">Introduction</Link></li>
                                <li><Link to="classcomponentstate">State</Link></li>
                                <li><Link to= "lifecycle">LifeCycle</Link></li>
                                <li><Link to="classcomponentprops">Props</Link></li>
                                <li><Link to="classcomponentcostructor">Constructor</Link></li>
                                <li><Link to="incdecstate">Task: Inc/Dec</Link></li>
                            </ol>
                        </div>
                        <div className='col-6'></div>
                    </div>
                </div>
                <div className='container'>
                    <div className='col-6-text-center'>
                        <Outlet />
                    </div>
                </div>

            </>

        )
    }
}

