import React, { useState } from 'react';
// import PasswordChecklist from "react-password-checklist"

const ParentFile = () => {
    const [password, setPassword] = useState("");
    const [showpassword, setShowPassword] = useState(false);
    return (
        <>
            <div className='text-center'>
                <h1>Strong Password Validation</h1>
            </div>

            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className='card bg-info'>
                        <div className='row my-4 mx-4'>
                            <label onClick={() => {
                                setShowPassword(!showpassword)
                            }}>{showpassword ? <i className='fa-solid fa-eye'></i> : <i class="fa-solid fa-eye-slash"></i>}</label>
                            <div className='col'>
                                <input className='form-control' type={showpassword ? "text" : "password"} id='password' placeholder='Enter your password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                        </div>
                        {/* <PasswordChecklist
                            rules={["minLength", "specialChar", "number", "capital", "match"]}
                            minLength={5}
                            value={password}
                            onChange={(isValid) => { }}
                            messages={{
                                minLength: "La contraseña tiene más de 8 caracteres.",
                                specialChar: "La contraseña tiene caracteres especiales.",
                                number: "La contraseña tiene un número.",
                                capital: "La contraseña tiene una letra mayúscula.",
                                match: "Las contraseñas coinciden.",
                            }}
                        /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParentFile;