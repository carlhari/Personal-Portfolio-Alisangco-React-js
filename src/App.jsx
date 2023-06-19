import Navigation from "./components/Navigation";
import {Link} from 'react-router-dom';

function App() {
 
  return (
    <div>
      <Navigation/>
      <div className="homeContent">
        <div className="introduction">
          <p>Hello I am Carl Hari Alisangco Inspiring FullStack Developer</p>
          <div><Link to={'/about'} className="aboutBtn">About Me</Link></div>
        </div>

        <div className="imagebox">
          <img src="profile.jpg"/>
        </div>
     </div>
     
    </div>
    
  )
}

export default App
