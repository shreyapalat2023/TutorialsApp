import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaInfoCircle,
  FaDatabase,
  FaSyncAlt,
  FaCog,
  FaTools,
  FaPlus,
  FaMinus
} from "react-icons/fa";
import PlaceHolder from "../../Component/PlaceHolder/PlaceHolder.jsx"

export default function ClassComponMenu() {
  const [selected, setSelected] = useState(null); // track selected menu

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-light text-primary text-center fw-bold fs-4 rounded-top">
              Class Component Topics
            </div>
            <div className="card-body p-4">
              <div className="row">
                {/* Left Column - Menu */}
                <div className="col-md-6">
                  <ul className="list-group">
                    <li
                      className="list-group-item list-group-item-action d-flex align-items-center"
                      onClick={() => setSelected("intro")}
                    >
                      <FaInfoCircle className="me-2 text-primary" />
                      <Link className="text-decoration-none text-dark" to="classcomponentintro">
                        Introduction
                      </Link>
                    </li>
                    <li
                      className="list-group-item list-group-item-action d-flex align-items-center"
                      onClick={() => setSelected("state")}
                    >
                      <FaDatabase className="me-2 text-success" />
                      <Link className="text-decoration-none text-dark" to="classcomponentstate">
                        State
                      </Link>
                    </li>
                    <li
                      className="list-group-item list-group-item-action d-flex align-items-center"
                      onClick={() => setSelected("lifecycle")}
                    >
                      <FaSyncAlt className="me-2 text-warning" />
                      <Link className="text-decoration-none text-dark" to="lifecycle">
                        Lifecycle
                      </Link>
                    </li>
                    <li
                      className="list-group-item list-group-item-action d-flex align-items-center"
                      onClick={() => setSelected("props")}
                    >
                      <FaCog className="me-2 text-info" />
                      <Link className="text-decoration-none text-dark" to="classcomponentprops">
                        Props
                      </Link>
                    </li>
                    <li
                      className="list-group-item list-group-item-action d-flex align-items-center"
                      onClick={() => setSelected("constructor")}
                    >
                      <FaTools className="me-2 text-danger" />
                      <Link className="text-decoration-none text-dark" to="classcomponentcostructor">
                        Constructor
                      </Link>
                    </li>
                    <li
                      className="list-group-item list-group-item-action d-flex align-items-center"
                      onClick={() => setSelected("incdec")}
                    >
                      <FaPlus className="me-1" /> <FaMinus className="me-2" />
                      <Link className="text-decoration-none text-dark" to="incdecstate">
                        Task: Inc/Dec
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Right Column - Conditional Rendering */}
                <div className="col-md-6 border-start">
                  <div className="p-3">
                    {selected ? <Outlet /> : <PlaceHolder/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
