import React from "react";
import {Card, Button} from "react-bootstrap";



function ProjectCard(props) {
  
  console.log(props)
    return (
      
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
     {props.details}
    </Card.Text>
    <Button variant="primary" href={props.codeUrl}>View Code</Button>
    <Button variant="primary" href={props.appUrl}>View App</Button>
  </Card.Body>
</Card>
    
    )
}

export default ProjectCard

