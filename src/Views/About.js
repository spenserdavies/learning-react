import React from 'react'

function About(){
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">About Me</h1>
      <p>
       This is my first React app!
      </p>
      <p className="pt-3">Here are the links to my stuff</p>
      <ul>
        <li className="pt-3 pl-3"><a href="http://www.github.com/spenserdavies" target="_blank">Github</a></li>
        <li className="pt-3 pl-3"><a href="http://linkedin.com/in/spenser-davies" target="_blank">LinkedIn</a></li>
        <li className="pt-3 pl-3"><a href="http://spenserdavies.com" target="_blank">Portfolio</a></li>
      </ul>
    </div>
  )
}

export default About