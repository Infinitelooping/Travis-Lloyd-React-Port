import React, { useState } from 'react';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Header from './components/Header';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    { name: 'commercial'},
    { name: 'portraits'},
    { name: 'food'},
    { name: 'landscape'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>

      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Header>


      <main>
        {!contactSelected ? (
          //if
          <>
            <Project></Project>     
          </>
          //else
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
