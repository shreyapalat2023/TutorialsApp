import React from "react";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="fw-bold text-center text-primary mb-4">
                <FaEnvelope className="me-2" />
                Contact Us
              </h2>
              <p className="text-center text-muted mb-4">
                Have questions or feedback? Fill out the form below and we’ll get back to you soon.
              </p>

              <form>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaUser className="me-2 text-primary" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaEnvelope className="me-2 text-success" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-3"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaCommentDots className="me-2 text-warning" />
                    Message
                  </label>
                  <textarea
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="Type your message..."
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary rounded-pill px-4">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
