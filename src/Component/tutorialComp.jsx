import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Tutorialcompo = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Class Component Section */}
        <div className="col-md-6 mb-3">
          <div
            className="card shadow-sm"
            style={{ cursor: "pointer" }}
            onClick={() => toggleMenu("class")}
          >
            <div className="card-body">
              <h5 className="card-title mb-0">📘 Class Component</h5>
            </div>
          </div>
          {openMenu === "class" && (
            <ul className="list-group mt-2">
              <li className="list-group-item">
                <Link to="/example/classcomponent/intro">Introduction</Link> 
              </li>
              <li className="list-group-item">
                <Link to="/example/classcomponent/state">State & Props</Link>
              </li>
              <li className="list-group-item">
                <Link to="/example/classcomponent/lifecycle">Lifecycle Methods</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Functional Component Section */}
        <div className="col-md-6 mb-3">
          <div
            className="card shadow-sm"
            style={{ cursor: "pointer" }}
            onClick={() => toggleMenu("functional")}
          >
            <div className="card-body">
              <h5 className="card-title mb-0">⚛️ Functional Component</h5>
            </div>
          </div>
          {openMenu === "functional" && (
            <ul className="list-group mt-2">
              <li className="list-group-item">
                <Link to="/example/functionalcomponent/hooks">React Hooks</Link>
              </li>
              <li className="list-group-item">
                <Link to="/example/functionalcomponent/useeffect">useEffect</Link>
              </li>
              <li className="list-group-item">
                <Link to="/example/functionalcomponent/customhooks">
                  Custom Hooks
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Outlet for nested routes */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Tutorialcompo;
