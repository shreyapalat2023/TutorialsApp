import React from "react";
import { FaReact, FaCode, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="fw-bold text-primary text-center mb-4">
                <FaGraduationCap className="me-2" />
                About This Tutorial
              </h2>
              <p className="text-muted fs-5 text-center">
                Welcome to the <span className="fw-semibold">React Tutorial</span>!  
                This application is designed to help you learn the core concepts of 
                <span className="text-primary"> React</span> in a simple and interactive way.
              </p>

              <div className="row mt-4 text-center">
                <div className="col-md-4">
                  <div className="p-3 border rounded-4 shadow-sm h-100">
                    <FaReact size={40} className="text-info mb-2" />
                    <h5 className="fw-bold">Learn React</h5>
                    <p className="text-muted small">
                      Understand the difference between <b>Class</b> and <b>Functional Components</b>.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="p-3 border rounded-4 shadow-sm h-100">
                    <FaCode size={40} className="text-success mb-2" />
                    <h5 className="fw-bold">Hands-on Practice</h5>
                    <p className="text-muted small">
                      Build tasks like <b>Increment/Decrement</b> and explore state & props.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="p-3 border rounded-4 shadow-sm h-100">
                    <FaGraduationCap size={40} className="text-warning mb-2" />
                    <h5 className="fw-bold">Step-by-Step</h5>
                    <p className="text-muted small">
                      Learn with structured topics, examples, and clear explanations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <button className="btn btn-primary rounded-pill px-4">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
