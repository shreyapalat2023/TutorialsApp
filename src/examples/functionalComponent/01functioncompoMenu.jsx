import { Link, Outlet } from "react-router-dom";
import { FaInfoCircle, FaDatabase, FaCogs, FaReact, FaProjectDiagram, FaClipboardCheck, FaCode, FaUnlockAlt, FaAnchor, FaClock, FaBezierCurve, FaLightbulb, FaRecycle, FaChevronCircleUp, FaRandom, FaLock, FaHandsHelping, FaTasks } from "react-icons/fa";

const FunctionalCompoMenu = () => {
  return (
    <>
      <div className="container mt-4">
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
                      <li className="list-group-item">
                        <FaInfoCircle className="me-2 text-primary" />
                        <Link className="text-decoration-none text-dark" to="functionalcomponentintro">
                          Introduction
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaDatabase className="me-2 text-success" />
                        <Link className="text-decoration-none text-dark" to="functionalcomponentstate">
                          State
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaCogs className="me-2 text-warning" />
                        <Link className="text-decoration-none text-dark" to="functionalcomponentprops">
                          Props
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaReact className="me-2 text-info" />
                        <Link className="text-decoration-none text-dark" to="reactjshooks">
                          ReactJs Hooks
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaProjectDiagram className="me-2 text-danger" />
                        <Link className="text-decoration-none text-dark" to="functionalcomponentusecontext">
                          UseContext
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaClipboardCheck className="me-2 text-primary" />
                        <Link className="text-decoration-none text-dark" to="stateexample">
                          State Example
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaCode className="me-2 text-success" />
                        <Link className="text-decoration-none text-dark" to="controlledcomponent">
                          Controlled Component
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaUnlockAlt className="me-2 text-warning" />
                        <Link className="text-decoration-none text-dark" to="uncontrolledcomponent">
                          UnControlled Component
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaAnchor className="me-2 text-info" />
                        <Link className="text-decoration-none text-dark" to="userefhookfunctionalcompo">
                          UseRef
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaClock className="me-2 text-danger" />
                        <Link className="text-decoration-none text-dark" to="useeffectfunctionalcompo">
                          UseEffect
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaBezierCurve className="me-2 text-primary" />
                        <Link className="text-decoration-none text-dark" to="uselayouteffectfunctionalcompo">
                          UseLayoutEffect
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaLightbulb className="me-2 text-warning" />
                        <Link className="text-decoration-none text-dark" to="usecallbackfunctionalcompo">
                          UseCallback
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaRecycle className="me-2 text-success" />
                        <Link className="text-decoration-none text-dark" to="usememofunctonalcompo">
                          UseMemo
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaChevronCircleUp className="me-2 text-info" />
                        <Link className="text-decoration-none text-dark" to="statelfiting">
                          State Lifting
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaRandom className="me-2 text-danger" />
                        <Link className="text-decoration-none text-dark" to="usereducer">
                          UseReducer
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaCode className="me-2 text-primary" />
                        <Link className="text-decoration-none text-dark" to="restvsspread">
                          Rest Vs Spread
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaLock className="me-2 text-warning" />
                        <Link className="text-decoration-none text-dark" to="strongpassword">
                          Password Validation Example
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaHandsHelping className="me-2 text-success" />
                        <Link className="text-decoration-none text-dark" to="imperativehandle">
                          Imperative Handle
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <FaTasks className="me-2 text-danger" />
                        <Link className="text-decoration-none text-dark" to="interviewtask">
                          Interview Task
                        </Link>
                      </li>
                    </ol>
                  </div>

                  {/* Right Column - Outlet */}
                  <div className="col-md-7 border-start">
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
};

export default FunctionalCompoMenu;
