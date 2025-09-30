import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaReact, FaRoute, FaLeaf } from "react-icons/fa";
import question from "../question.png";
import PlaceHolder from "./PlaceHolder/PlaceHolder.jsx";

const InterviewQuestionCompo = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="container-fluid mt-2">
      {/* Header Card */}
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <div className="card shadow-lg border-0 rounded-4 bg-light">
            <div className="card-body p-4">
              <img src={question} alt="Question" style={{ width: "80px" }} />
              <h2 className="fw-bold mb-2 text-primary d-flex justify-content-center align-items-center gap-2">
                Interview Questions
              </h2>
              <p className="text-muted">
                Be prepared with <span className="fw-semibold">React</span>{" "}
                <span className="fw-semibold">Interview Questions</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="row mt-4">
        {/* Sidebar Links */}
        <div className="col-md-5">
          <div className="list-group shadow-sm">
            <Link
              to="basicquestion"
              className="list-group-item list-group-item-action d-flex align-items-center gap-2"
              onClick={() => setSelected(true)}
            >
              <FaReact className="text-primary" /> Basic React Questions
            </Link>
            <Link
              to="routerquestion"
              className="list-group-item list-group-item-action d-flex align-items-center gap-2"
               onClick={() => setSelected(true)}
            >
              <FaRoute className="text-success" /> React Router
            </Link>
            <Link
              to="lazyquestion"
              className="list-group-item list-group-item-action d-flex align-items-center gap-2"
               onClick={() => setSelected(true)}
            >
              <FaLeaf className="text-warning" /> Lazy Loading
            </Link>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-md-7">
          <div className="p-3">
            {selected ? <Outlet /> : <PlaceHolder />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestionCompo;
