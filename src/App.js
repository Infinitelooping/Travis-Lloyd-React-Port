import React, { useState } from 'react';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Header from './components/Header';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  function pageRender() {
    if (currentPage === 'contact') {
      return <ContactForm></ContactForm>
    } else if (currentPage === 'about') {
      return <About></About>
    } else if (currentPage === 'resume') {
      return <Resume></Resume>
    } else {
      return <Project></Project>
    }
  }

  return (
    <div>

      <Header
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}>
      </Header>


      <main>
        {pageRender()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
