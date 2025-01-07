import React, { useState, createContext, useContext } from "react";
import FormCol from "./03FormCol"

export const ThemeContext = React.createContext()

const MainFile = () => {

    let [theme, setheme] = useState(true)
    return (
        <ThemeContext.Provider value = {{theme}}>

            <>
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className={theme ? "card" : "card text-bg-dark"}>
                            <div className="card-header text-center">Login</div>
                            <label onClick={() => {
                                setheme(!theme)
                            }}>
                                {theme ? <i className="fa fa-moon"></i> : <i className="fa fa-sun"></i>}
                            </label>
                            <div className="card-body">
                                <FormCol theme={theme} />

                                <div className="row my-2">
                                    <div className="col">
                                        <input className={theme ? "form-control" : "form-control text-bg-dark"} id="password" type="password" placeholder="Enter Password" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col">
                                        <input className="btn btn-success" type="button" value="login" /> &nbsp;
                                        <input className="btn btn-danger" type="button" value="cancel" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </ThemeContext.Provider>
    )
}

export default MainFile
