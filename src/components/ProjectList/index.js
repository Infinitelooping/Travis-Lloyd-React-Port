import React, { useState } from 'react';

const ProjectList = () => {

  const [photos, setPhotos] = useState("");

  console.log('photos ', photos)

  const [projects] = useState([
    {
      name: 'Save The Date',
      id: 0,
      liveSite: "https://sleepy-beyond-01219.herokuapp.com/",
      description: 'Create an event, update an event, add guets to your event. and have the best event you can plan.',
      github: "https://github.com/Infinitelooping/save-the-date"
    },
    {
      name: 'Flight Plan',
      id: 1,
      liveSite: "https://infinitelooping.github.io/FlightRoulette/",
      description: 'Set your budget, set a destination. And see what you can get within your budget.',
      github: "https://github.com/Infinitelooping/FlightRoulette"
    },
    {
      name: 'Run Buddy',
      id: 2,
      liveSite: "https://github.com/Infinitelooping/run-buddy",
      description: 'Front end using HTML, and CSS for an exercise service.',
      github: "https://github.com/Infinitelooping/run-buddy"
    },
    {
      name: 'Just Tech News',
      id: 3,
      liveSite: "https://github.com/Infinitelooping/just-tech-news-Travis-Lloyd",
      description: 'A place to post tech new for others to read and comment on.',
      github: "https://github.com/Infinitelooping/just-tech-news-Travis-Lloyd"
    },
    {
      name: 'Zoo Keepr',
      id: 4,
      liveSite: "https://secret-wave-92007.herokuapp.com/",
      description: 'A simulator to build your own zoo.',
      github: "https://github.com/Infinitelooping/Zookeeper"
    },
    {
      name: 'Weather Dashboard',
      id: 5,
      liveSite: "https://infinitelooping.github.io/Travis-Lloyd-Weather-Dashboard/",
      description: 'A dashboard that allows you to look up cities and view the daily forecast, as well as the next week.',
      github: "https://github.com/Infinitelooping/Travis-Lloyd-Weather-Dashboard"
    }
  ]);

  const currentProjects = projects;


  console.log('currentProjetcs', currentProjects)

  return (
    <div className="flex-row project">
      {currentProjects.map((image) => (
        <div>
          <h4>{image.name}</h4>
          <p>{image.description}</p>
          <a href={image.github}>Check out on Github</a>
          <a href={image.liveSite}>
            <img
              src={require(`../../assets/small/${image.id}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;