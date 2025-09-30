import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import PlaceHolder from "../../Component/PlaceHolder/PlaceHolder";
import { FaInfoCircle, FaDatabase, FaCogs, FaReact, FaProjectDiagram, FaClipboardCheck, FaCode, FaUnlockAlt, FaAnchor, FaClock, FaBezierCurve, FaLightbulb, FaRecycle, FaChevronCircleUp, FaRandom, FaLock, FaHandsHelping, FaTasks } from "react-icons/fa";

const FunctionalCompoMenu = () => {
  const [selected, setSelected] = useState(false); // track selected menu
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header bg-light text-primary text-center fw-bold fs-4 rounded-top">
                Functional Component Topics
              </div>
              <div className="card-body p-4">
                <div className="row">
                  {/* Left Column - Menu */}
                  <div className="col-md-5">
                    <ol className="list-group overflow-auto" style={{ maxHeight: "500px" }}>
                      <li className="list-group-item list-group-item-action">
                        <FaInfoCircle className="me-2 text-primary" />
                        <Link className="text-decoration-none text-dark" to="functionalcomponentintro" onClick={() => setSelected(true)}>
                          Introduction
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaDatabase className="me-2 text-success" />
                        <Link className="text-decoration-none text-dark" to="functionalcomponentstate" onClick={() => setSelected(true)}>
                          State
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaCogs className="me-2 text-warning" />
                        <Link className="text-decoration-none text-dark" to="functionalcomponentprops" onClick={() => setSelected(true)}>
                          Props
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaReact className="me-2 text-info" />
                        <Link className="text-decoration-none text-dark" to="reactjshooks" onClick={() => setSelected(true)}>
                          ReactJs Hooks
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaProjectDiagram className="me-2 text-danger" />
                        <Link className="text-decoration-none text-dark" to="functionalcomponentusecontext" onClick={() => setSelected(true)}>
                          UseContext
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaClipboardCheck className="me-2 text-primary" />
                        <Link className="text-decoration-none text-dark" to="stateexample" onClick={() => setSelected(true)}>
                          State Example
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaCode className="me-2 text-success" />
                        <Link className="text-decoration-none text-dark" to="controlledcomponent" onClick={() => setSelected(true)}>
                          Controlled Component
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaUnlockAlt className="me-2 text-warning" />
                        <Link className="text-decoration-none text-dark" to="uncontrolledcomponent" onClick={() => setSelected(true)}>
                          UnControlled Component
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaAnchor className="me-2 text-info" />
                        <Link className="text-decoration-none text-dark" to="userefhookfunctionalcompo" onClick={() => setSelected(true)}>
                          UseRef
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaClock className="me-2 text-danger" />
                        <Link className="text-decoration-none text-dark" to="useeffectfunctionalcompo" onClick={() => setSelected(true)}>
                          UseEffect
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaBezierCurve className="me-2 text-primary" />
                        <Link className="text-decoration-none text-dark" to="uselayouteffectfunctionalcompo" onClick={() => setSelected(true)}>
                          UseLayoutEffect
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaLightbulb className="me-2 text-warning" />
                        <Link className="text-decoration-none text-dark" to="usecallbackfunctionalcompo" onClick={() => setSelected(true)}>
                          UseCallback
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaRecycle className="me-2 text-success" />
                        <Link className="text-decoration-none text-dark" to="usememofunctonalcompo" onClick={() => setSelected(true)}>
                          UseMemo
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaChevronCircleUp className="me-2 text-info" />
                        <Link className="text-decoration-none text-dark" to="statelfiting" onClick={() => setSelected(true)}>
                          State Lifting
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaRandom className="me-2 text-danger" />
                        <Link className="text-decoration-none text-dark" to="usereducer" onClick={() => setSelected(true)}>
                          UseReducer
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaCode className="me-2 text-primary" />
                        <Link className="text-decoration-none text-dark" to="restvsspread" onClick={() => setSelected(true)}>
                          Rest Vs Spread
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaLock className="me-2 text-warning" />
                        <Link className="text-decoration-none text-dark" to="strongpassword" onClick={() => setSelected(true)}>
                          Password Validation Example
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaHandsHelping className="me-2 text-success" />
                        <Link className="text-decoration-none text-dark" to="imperativehandle" onClick={() => setSelected(true)}>
                          Imperative Handle
                        </Link>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <FaTasks className="me-2 text-danger" />
                        <Link className="text-decoration-none text-dark" to="interviewtask" onClick={() => setSelected(true)}>
                          Interview Task
                        </Link>
                      </li>
                    </ol>
                  </div>

                  {/* Right Column - Outlet */}
                  <div className="col-md-7 border-start">
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
    </>
  );
};

export default FunctionalCompoMenu;
