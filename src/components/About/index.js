import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me:</h1>
            <p>My name is Travis Lloyd, I am a graduate of the Univseristy of Utah with a Bachelors of Science in Economics and a full-stack developer. I have loved working with computers 
                In many different facets. I have worked in business and sales since I started college and continue to do so after as I worked to become a full-stack developer. The things I have learned from 
                business and sales have helped become a worker that is able to communicate and collaborate efficently. I have also learned that the ability to create rather than simple share about a product is so much 
                sweeter. I enjoy working with business, but I enjoy even more creating the tools needed for these businesses even more.
            </p>
            <p>
            I enjoy outdoors, but I live for movies and at the end of a long days work hanging out with my wife, and at times playing some video games with close friends. I learn new things hold onto knowledge, and seek to 
                apply that knowlege not just to work, web-development, but to family and friends relationships as well.
            </p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;