

function Popup(props) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="btnCloseContainer"><button onClick={props.close}>CLOSE</button></div>
            
        <input type="text" className="email" placeholder="Email" />
        <textarea name="" id="" cols="" rows="10" placeholder="Type Your Message"></textarea>
        <button >SEND</button>
      </div>
    </div>
  );
}

export default Popup;
