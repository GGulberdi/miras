import React from 'react'
import {Card} from 'react-bootstrap'

 function About() {
    return (
        <div>
            <Card border="info" style={{ width: '100 vh' , justifyContent:"center" }}>
    <Card.Header>ABOUT</Card.Header>
    <Card.Body>
      <Card.Title>Our mission</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    )
}

export default About;