import React from 'react';
import Pic from '../pic.png';
import Footer from './Footer';
import Header from './Header';
import email from '../email.png';
import github from '../github.png';
import linkedin from '../linkedin.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <Header />
      <div class='container'>
        <h3 class='sub-heading'> Welcome to my Webpage </h3>{' '}
        <img
          style={{ height: '250px', margin: '10px', 'border-radius': '5%' }}
          src={Pic}
          alt='profile-pic'
        />
        <p>
          {' '}
          On my path to becoming a web developer, I am currently learning to
          code at the Birmingham University.I am learning full stack, including
          the skills required to becoming a proficient front and back - end
          developer.The programme includes instruction in high - demand
          technologies and frameworks including HTML5, CSS3, JavaScript, jQuery,
          Bootstrap, Express.js, React.js, Node.js, Database Theory,
          Bookshelf.js, MongoDB, MySQL, Java, Command Line and Git.We not only
          have the opportunity to learn from the best instructors but also work
          on projects collaboratively with our peers.The course is quite tough
          and challenging and testing my skills and doggedness, but I am
          thoroughly enjoying the challenge. Once I complete the 6 month
          bootcamp, I believe I will feel empowered and be able to call myself a
          programmer!This instructional and highly interactive course is giving
          me the knowledge base and confidence to embark on a career in web
          based and mobile technology. You will find samples of my journey on
          project's page. It shows how much I have grown from the beginning of
          the course. You can click the links to see the deployed versions of my
          work or check out my code on GitHub.
        </p>
        <div className='contactLinks'>
          <a
            href='mailto:neeru.jai@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='img-fluid' src={email} alt='' />
          </a>
          <a
            className='contactLinks'
            href='https://github.com/NeerajaDjea'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='img-fluid' src={github} alt='' />
          </a>
          <a
            href='https://www.linkedin.com/in/neeraja-djearaman-a83742198/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='img-fluid' src={linkedin} alt='' />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
