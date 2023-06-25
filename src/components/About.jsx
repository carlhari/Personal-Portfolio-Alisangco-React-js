import Navigation from './Navigation';

function About() {
  const images = ['html.png', 'css.png', 'js.png', 'node.png','php.png', 'python.png','react.png','tailwind.png'];
  
  return (
    <div>
      <Navigation/>
      <div className="aboutContent">
        <div className="description">
          <p>Welcome to my Personal Portfolio! This is Carl Hari Alisangco. You can call me by my given name. Currently studying and pursuing a Bachelor of Science in Information Technology. Inspiring FullStack Developer. Busy honing my skills to prepare for my future career. Wish me luck :D.</p>
        </div>
        <div className="techs">
          <p>Technologies I used: </p>
          
          <div className="images">
              {images.map((imageList, index) => (<img key={index} src={imageList} alt={imageList} />))}
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default About;