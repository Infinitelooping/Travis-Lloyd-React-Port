import React from 'react';
import ProjectList from '../ProjectList';

function Project() {
  // const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">Portfolio</h1>
      <ProjectList/>
    </section>
  );
}
export default Project;