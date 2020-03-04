import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from '../components/Projects.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import '../App.css';
import Home from '../components/Home';

function Header() {
  return (
    <div>
      <div className='navigation'>
        <h2 class='name-title'>Neeraja</h2>
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
  );
}

export default Header;
