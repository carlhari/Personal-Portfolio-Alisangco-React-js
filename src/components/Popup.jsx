import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Confirmation from "./Confirmation";

function Popup(props) {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
 


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1x2iw3s", "template_5109ji8", form.current, "57KNmk21agGBbv-j1")
      .then((result) => {
        setEmailSent(true);
        console.log(result.text);
      }, (error) => {
        setEmailSent(false);
        console.log(error.text);
      });
  };

  const handleConfirmationClose = () => {
    setEmailSent(null);
    props.close();
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="btnCloseContainer">
          <button onClick={props.close}>CLOSE</button>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="NAME" required />
          <input type="email" name="user_email" value={email} onChange={handleChange} placeholder="EMAIL" required />
          <textarea name="message" placeholder="MESSAGE" required />
          <input type="submit" value="SEND" />
        </form>
      </div>
      {emailSent !== null && (
        <Confirmation result={emailSent} onClose={handleConfirmationClose} error={error} />
      )}
    </div>
  );
}

export default Popup;