import React, { useState } from 'react';


const Resume = () => {

return (
    <div className="flex-row resume-component">
        <h1>Travis Lloyd</h1>
        <h2>Full Stack Web-Developer</h2>
        <h3>My Skills:</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Databases: SQL, MogoDB, graphQL</li>
            <li>React</li>
            <li>MERN</li>
        </ul>
        <a href= '../../assets/resume/resume.pdf'>See Resume Here </a>
    </div>
  );
};

export default Resume;