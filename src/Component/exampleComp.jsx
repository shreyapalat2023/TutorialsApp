import React from "react";
import HeaderCompo from "./headerFile";
import { Outlet, Link } from "react-router-dom";
import notes from "../notes.png";

const ExampleComp = () => {
  return (
    <>
      <HeaderCompo/>

  
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                  <img src={notes}/>
                <h2 className="fw-bold mb-3 text-primary">
                  {/* <i className="bi bi-mortarboard-fill me-2"></i> */}
                  Welcome to my Tutorial
                </h2>
                <p className="text-muted">
                  Learn React with <span className="fw-semibold">Class</span> and{" "}
                  <span className="fw-semibold">Functional Components</span>.
                </p>
                <div className="row mt-4 d-flex align-items-center justify-content-center">
                  <div className="col-4">
                    <Link
                      to="classcomponent"
                      className="btn btn-outline-primary w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="bi bi-diagram-3"></i> Class Component
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link
                      to="functionalcomponent"
                      className="btn btn-primary w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="bi bi-lightning-fill"></i> Functional Component
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ExampleComp;
