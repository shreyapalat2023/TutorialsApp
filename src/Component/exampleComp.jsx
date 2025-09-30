import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";  // 👈 Added icon
import notes from "../notes.png";

const ExampleComp = () => {
  const location = useLocation();

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <img src={notes} alt="Notes" />
                <h2 className="fw-bold mb-3 text-primary">
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

      {/* Placeholder or Outlet */}
      <div className="container-fluid mt-4">
        {location.pathname === "/example" ? (
          <div
            className="alert alert-info text-center rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-center gap-2"
            style={{ minHeight: "160px", fontSize: "1.1rem" }}
          >
            <FaBookOpen size={32} className="text-primary" />
            <span>👉 Select a topic above to get started!</span>
          </div>
        ) : (
          <Outlet />
        )}

      </div>

    </>
  );
};

export default ExampleComp;
