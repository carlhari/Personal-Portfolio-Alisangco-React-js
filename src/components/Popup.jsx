import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Confirmation from "./Confirmation";
import { redirect } from "react-router-dom";

function Popup(props) {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(null);
  const [error, setError] = useState(null);
  
  const clearFields = () => {
    setError(null);
    form.current.reset();
  };


  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm("service_1x2iw3s", "template_5109ji8", form.current, "57KNmk21agGBbv-j1")
      .then((result) => {
        setEmailSent(true);
        clearFields();
        console.log(result.text);
        setError(false);
        form.current.reset();
      }, (error) => {
        setEmailSent(false);
        setError(true);
        console.log(error.text);
        form.current.reset();
      });

  };

  const handleConfirmationClose = () => {
    setEmailSent(null);
    props.close();
  };

 

  

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="btnCloseContainer">
          <button onClick={props.close}>CLOSE</button>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name="user_name" placeholder="NAME" required />
          <input type="email"  name="user_email"  placeholder="EMAIL" required />
          <textarea  name="message" placeholder="MESSAGE" required />
          <input type="submit" value="SEND" />
        </form>
      </div>
      {emailSent !== null && (
        <Confirmation result={emailSent} onClose={handleConfirmationClose} error={error} />
      
      )}
      {console.log(error)}
    </div>
  );
}

export default Popup;