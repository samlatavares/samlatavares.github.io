import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="main">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
        <title>Samla's Personal Portfolio</title>
      </head>

      <header>
        <Nav />
      </header>

      <div id="homeDiv"><Home /></div>
      <div id="aboutDiv"><About /></div>
      <div id="projectsDiv"><Projects /></div>
      <div id="contactDiv"><Contact /></div>
    </div>
  );
}

export default App;
