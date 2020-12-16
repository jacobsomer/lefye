import React from 'react';
import { Card } from 'react-bootstrap';
import './Recommendations.css';

class NewsCard extends React.Component {
    render() {
      return (
        
        <Card >
          <Card.Img style={{width:"100%",height:'15vw',objectFit:'cover'}} variant="top" src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'/>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        
      );
    }
  }
  export default NewsCard;
