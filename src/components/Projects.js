import React, { Component } from 'react';
import Fitness from "../img/fitness.png";
import Employee from"../img/employee.png";
import Burger from "../img/burger.png";
import notes from "../img/notetaker.png";
import restaurant from "../img/restaurant.png";
import ProjectCard from "./ProjectCard";
import ProjectData from "../ProjectData.json"

export class Projects extends Component {
    state = {
        ProjectData 
      };
    
    render() {
        
        return (
            <div>
            <h1> Projects </h1>
            {this.state.ProjectData.map(Project => ( 
        <ProjectCard 
        title = {Project.title}
        codeUrl = {Project.codeUrl}
        appUrl = {Project.appUrl}
        img = {Project.img}
        details = {Project.details}
        />
          
             ) )}
             </div>
        );
}}

export default Projects
