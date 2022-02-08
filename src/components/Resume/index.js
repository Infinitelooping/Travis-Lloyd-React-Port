import React, { useState } from 'react';
import resume from "../../assets/resume/resume.pdf";

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
        <a class="project-git-link" href={resume}>See Resume Here</a>
        
    </div>
  );
};

export default Resume;