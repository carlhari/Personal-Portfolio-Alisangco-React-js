import Navigation from './Navigation';
import { useState } from 'react';
import Popup from './Popup';

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const onClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Navigation />
      <div className="contactContent">
        <button className="btnSend" onClick={() => setShowPopup(true)} style={{opacity: showPopup ? 0 : 1}}>
          Send Email
        </button>

        <div className="contact" style={{opacity: showPopup ? 0 : 1}}>
          <div className="icons">
            <a href="" target='__blank'><img src="github.png" alt="GitHub" /></a>
            <a href="" target='__blank'><img src="facebook.png" alt="Facebook" /></a>
          </div>

          <p>Email: alisangcocarl@gmail.com</p>
        </div>

        {showPopup ? (<Popup close={onClose} setShowPopup={setShowPopup}></Popup>) : null}
      </div>
    </div>
  );
}

export default Contact;
