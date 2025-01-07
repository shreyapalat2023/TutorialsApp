import React, { useState } from 'react';

const MainFiletwo = () => {
    let [theme, setTheme] = useState(true);
    return (
        <>

            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className={theme ? "card" : "card text-bg-dark"}>
                        <div className='card-header text-center'>Login</div>
                        <label onClick={() => setTheme(!theme)}>
                            {/* JSON.stringify(theme) */}
                            {theme ? <i className='fa fa-moon'></i> : <i className='fa fa-sun'></i>}

                        </label>

                        <div className='card-body'>
                            <div className='row my-2'>
                                <div className='col'>
                                    <input type='text' className={theme ? "form-control" : "form-control text-bg-dark"} placeholder='Enter your username' name='username' id="username" />
                                </div>
                            </div>
                            <div className='row my-2'>
                                <div className='col'>
                                    <input type='password' className={theme ? "form-control  " : "form-control text-bg-dark"} placeholder='Enter your password ' name='username' id="username" />
                                </div>
                            </div>
                            <div className='row my-2'>
                                <div className='col'>
                                    <input type='button' className='btn btn-primary' value="login" /> &nbsp;
                                    <input type='button' className='btn btn-danger' value="Cancel" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default MainFiletwo;