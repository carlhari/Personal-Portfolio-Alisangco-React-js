import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = ({ error }) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Redirect to the home route after 5 seconds
      navigate("/");
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div
      className="confirmation-overlay"
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <div className="confirmation-content">
        <p>
          {!error
            ? "Your email has been successfully sent!"
            : "Sorry, there was an error sending your email."}
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
