import React from 'react';
import { HashRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from '../components/Projects.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import '../App.css';

function Home() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <div className='App'>
        <Route exact path='/' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contacts' component={Contact} />
      </div>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default Home;
