import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaInfoCircle,
  FaDatabase,
  FaSyncAlt,
  FaCog,
  FaTools,
  FaPlus, FaMinus
} from "react-icons/fa";

export default class ClassComponMenu extends Component {
  render() {
    return (
      <>
        <div className="container mt-4">
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
                        <li className="list-group-item d-flex align-items-center">
                          <FaInfoCircle className="me-2 text-primary" />
                          <Link className="text-decoration-none text-dark" to="classcomponentintro">
                            Introduction
                          </Link>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          <FaDatabase className="me-2 text-success" />
                          <Link className="text-decoration-none text-dark" to="classcomponentstate">
                            State
                          </Link>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          <FaSyncAlt className="me-2 text-warning" />
                          <Link className="text-decoration-none text-dark" to="lifecycle">
                            Lifecycle
                          </Link>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          <FaCog className="me-2 text-info" />
                          <Link className="text-decoration-none text-dark" to="classcomponentprops">
                            Props
                          </Link>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          <FaTools className="me-2 text-danger" />
                          <Link className="text-decoration-none text-dark" to="classcomponentcostructor">
                            Constructor
                          </Link>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          {/* Replace FaPlusMinus with two icons or a suitable single icon */}
                          <FaPlus /> <FaMinus />
                          <Link className="text-decoration-none text-dark" to="incdecstate">
                            Task: Inc/Dec
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Right Column - Outlet */}
                    <div className="col-md-6 border-start">
                      <div className="p-3">
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
