import React from 'react'
import Navigation from './Navigation'

function Works() {
  return (
    <div>
        <Navigation/>
        <div className="workContent">
     
            <div>
             <a href="https://github.com/Lemon-tech24/Todo-App-React" target='_blank' className="workBtn"><img src="todoapp.png" className="workImages"/></a>
            <p>Todo App using React Js</p>
            </div>

            <div>

            <a href="https://github.com/Lemon-tech24/youtube-downloader" target='_blank' className="workBtn"><img src="youtube1.png" className="workImages"/></a>
            <p>Youtube Downloader</p>
            </div>
      
        </div>
        <div className="works-p">
          <p>And Many more available on my Github Account</p>
          <a href="https://github.com/Lemon-tech24" target='_blank'><img src="github.png" alt="Github" className='gLogo' /></a>
        </div>
    </div>
  )
}

export default Works