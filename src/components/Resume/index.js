import React, { useState } from 'react';


const Resume = () => {

return (
    <div className="flex-row resume-component">
        <h1>Travis Lloyd</h1>
        <h2>Full Stack Web-Developer</h2>
        <h3>My Skills:</h3>
        <ul>
            <li class="resume-list">HTML</li>
            <li class="resume-list">CSS</li>
            <li class="resume-list">JavaScript</li>
            <li class="resume-list">Databases: SQL, MogoDB, graphQL</li>
            <li class="resume-list">React</li>
            <li class="resume-list">MERN</li>
        </ul>
        <a class="project-git-link" href= '../../assets/resume/resume.pdf'>See Resume Here</a>
        
    </div>
  );
};

export default Resume;