import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from '../components/Projects.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import '../App.css';

function NavBar() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contacts' component={Contact} />

        <div className='navigation'>
          <div className='navigation-sub'>
            <Link id='link' to='/' className='item'>
              {' '}
              About{' '}
            </Link>
            <Link id='link' to='/projects' className='item'>
              {' '}
              Projects{' '}
            </Link>
            <Link id='link' to='/contacts' className='item'>
              {' '}
              Contact{' '}
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default NavBar;
