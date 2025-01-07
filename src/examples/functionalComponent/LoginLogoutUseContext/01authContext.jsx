
import React, { useState, useEffect, useContext, createContext } from 'react';
import Button from "./02Button.jsx";
export const AuthContext = createContext();




const Account = () => {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [password, setPassword] = useState(null);
    const value = {
        authUser, setAuthUser, isLoggedIn, setIsLoggedIn, password, setPassword
    }

    const getData = (e) => {
        setAuthUser(e.target.value);
    }
    const getpassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <>
            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className='card'>
                        <div className='card-header text-center bg-info'>Your Account</div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col my-2'>
                                    <label htmlFor="username">Username:</label>
                                    <input type='text' id='username' className='form-control' placeholder='Enter your username' onChange={getData}></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col my-2'>
                                    <label htmlFor="password">Password:</label>
                                    <input type='password' id='password' className='form-control' placeholder='Enter your password' onChange={getpassword}></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col my-2'>
                                    <AuthContext.Provider value={value}>

                                        <Button />
                                    </AuthContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Account;