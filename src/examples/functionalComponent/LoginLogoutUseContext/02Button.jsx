import React, { useContext } from 'react';
import { AuthContext } from './01authContext';

const Button = () => {
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn, password, setPassword } = useContext(AuthContext); 
    const Login = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
    }

    const Logout = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setAuthUser(null);
        setPassword(null);
    }
    return (
        <>
            <div className='text-center'>
                <span>User is currently {isLoggedIn ? "Logged-Out" : "Logged-In"}</span>
                {isLoggedIn ? null : (<h4>Welcome  {authUser}!! <h6>username: {authUser}</h6><h6>Password: {password}</h6></h4>)}
                <br />
                {isLoggedIn ? <button className='btn btn-success' onClick={Login}>Login</button> : <button className='btn btn-danger' onClick={Logout}>Logout</button>}
            </div>
        </>
    );
};

export default Button;