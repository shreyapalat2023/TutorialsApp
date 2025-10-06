import { Link, Outlet, useLocation } from "react-router-dom";
import QuizPlaceHolder from "../PlaceHolder/QuizPlaceHolder.jsx";


export default function QuizLayout() {
  const location = useLocation();

  // Determine if a quiz topic is selected
  const showPlaceholder = location.pathname === "/quiz" || location.pathname === "/";

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link className="btn btn-outline-primary mx-1" to="/quiz/react">React Quiz</Link>
              <Link className="btn btn-outline-primary mx-1" to="/quiz/javascript">JavaScript Quiz</Link>
              <Link className="btn btn-outline-primary mx-1" to="/quiz/html">HTML Quiz</Link>
              <Link className="btn btn-outline-primary mx-1" to="/quiz/css">CSS Quiz</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Conditional rendering */}
      {showPlaceholder ? <QuizPlaceHolder /> : <Outlet />}
    </>
  );
}
