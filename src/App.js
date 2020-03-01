import React from 'react';
// import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <NavBar />

    // <BrowserRouter>
    //   <div className='App'>
    //     <h1> React Portfolio </h1>
    //     <Route exact path='/' component={About} />
    //     <Route path='/projects' component={Projects} />
    //     <Route path='/contacts' component={Contact} />

    //     <div className='navigation'>
    //       <div className='navigation-sub'>
    //         <Link id='link' to='/' className='item'>
    //           {' '}
    //           About{' '}
    //         </Link>
    //         <Link id='link' to='/projects' className='item'>
    //           {' '}
    //           Projects{' '}
    //         </Link>
    //         <Link id='link' to='/contacts' className='item'>
    //           {' '}
    //           Contact{' '}
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
