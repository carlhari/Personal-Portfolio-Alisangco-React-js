
import { Link } from "react-router-dom"

function Navigation() {

  return (
   <>
<div className="nav" >
    <div><Link to="/" className="title">Carl Hari</Link></div>
    <div className="menuBtn">
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </div>
</div>
   </>
  )
}

export default Navigation
