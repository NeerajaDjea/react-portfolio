import FadeIn from 'react-fade-in';
import React from 'react';
import Pic from '../pic.png';
import Footer from './Footer';
import Header from './Header';
import email from '../email.png';
import github from '../github.png';
import linkedin from '../linkedin.png';
import cv from '../cv.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <Header />
      <div class='container'>
        <FadeIn>
          <h3 class='sub-heading'> Welcome to my Webpage </h3>{' '}
        </FadeIn>
        <img
          style={{ height: '250px', margin: '10px', 'border-radius': '5%' }}
          src={Pic}
          alt='profile-pic'
        />
        <p>
          {' '}
          Hello, I am Neeraja and I have recently graduated as a full stack
          developer from the Birmingham University. On my path to becoming a web
          developer,I have learnt the MERN stack along with other popular web
          technologies. We not only had the opportunity to learn from the best
          instructors but also worked on projects collaboratively with our
          peers. Before deciding to become a developer, I have enjoyed being a
          primary school teacher which has a taught me a lot about time
          management, team work and goal setting. I have found that my true
          passion lies in coding ! With the skills I've gained coupled with my
          strong work ethic, I feel empowered to embark on a career in web based
          and mobile technology. You will find samples of my journey on
          project's page. It shows how much I have grown from the beginning of
          the course. You can click the links to see the deployed versions of my
          work or check out my code on GitHub.
        </p>
        <FadeIn>
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
            <a
              href='https://drive.google.com/file/d/1mvU_iw7LkpFoex19n3zZuy-sDkr2-J5h/view'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='img-fluid' src={cv} alt='' />
            </a>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </div>
  );
}

export default About;
