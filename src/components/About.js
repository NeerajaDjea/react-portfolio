import React from 'react';
import Pic from '../pic.png';
import Footer from './Footer';
import Header from './Header';

function About() {
  return (
    <div>
      <div class='anim'>
        <Header />
        <h1> Welcome to my webpage </h1>{' '}
      </div>
      <img
        style={{ height: '250px', margin: '10px', 'border-radius': '5%' }}
        src={Pic}
        alt='profile-pic'
      />
      <p>
        {' '}
        On my path to becoming a web developer, I am currently learning to code
        at the Birmingham University.I am learning full stack, including the
        skills required to becoming a proficient front and back - end
        developer.The programme includes instruction in high - demand
        technologies and frameworks including HTML5, CSS3, JavaScript, jQuery,
        Bootstrap, Express.js, React.js, Node.js, Database Theory, Bookshelf.js,
        MongoDB, MySQL, Java, Command Line and Git.We not only have the
        opportunity to learn from the best instructors but also work on projects
        collaboratively with our peers.The course is quite tough and challenging
        and testing my skills and doggedness, but I am thoroughly enjoying the
        challenge. Once I complete the 6 month bootcamp, I believe I will feel
        empowered and be able to call myself a programmer!This instructional and
        highly interactive course is giving me the knowledge base and confidence
        to embark on a career in web based and mobile technology. You will find
        samples of my journey on projects ' page. It shows how much I have grown
        from the beginning of the course. You can click the links to see the
        deployed versions of my work or check out my code on GitHub.
      </p>
      <Footer />
    </div>
  );
}

export default About;
