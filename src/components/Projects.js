import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectData from '../ProjectData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck } from 'react-bootstrap';
import '../App.css';
import Footer from './Footer';
import Header from './Header';

export class Projects extends Component {
  state = {
    ProjectData
  };

  render() {
    return (
      <div>
        <Header />
        <h1> Projects </h1>
        <CardDeck>
          {this.state.ProjectData.map(Project => (
            <ProjectCard
              title={Project.title}
              codeUrl={Project.codeUrl}
              appUrl={Project.appUrl}
              img={Project.img}
              details={Project.details}
            />
          ))}
        </CardDeck>
        <Footer />
      </div>
    );
  }
}

export default Projects;
