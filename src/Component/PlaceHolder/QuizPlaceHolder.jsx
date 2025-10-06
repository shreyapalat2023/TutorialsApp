import { FaBookOpen } from "react-icons/fa6";
const QuizPlaceHolder = () => (
  <div
          className="alert alert-info text-center rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-center gap-2"
          style={{ minHeight: "500px", fontSize: "1.1rem" }}
        >
          <FaBookOpen size={32} className="text-primary" />
          <span>👉 Select a topic above to get started!</span>
        </div>
);

export default QuizPlaceHolder;
