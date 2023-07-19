
import { Link } from "react-router-dom"
import { useState } from "react";
import MobileResponse from "./MobileResponse"

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };



  return (
   <>
    <div className="nav" >
        <div><Link to="/" className="title">Carl Hari</Link></div>
        <div className="menuBtn">
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </div>

        <div className={`burger-btn ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
      </div>
        
    </div>
    <MobileResponse isOpen={isOpen} handleOpen={handleMenuToggle}/>
   </>
  )
}

export default Navigation
