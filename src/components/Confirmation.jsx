import { useState, useEffect } from "react";

const Confirmation = ({ result, onClose, error }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      // Hide the popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);

  return (
    <div className="confirmation-overlay" style={{display:isVisible ? "block": "none"}}>
      <div className="confirmation-content">
        <p>{error == null ? 'Your email has been successfully sent!' : 'Sorry, there was an error sending your email.'}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Confirmation;