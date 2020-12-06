import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "./cards.css";
import Logo from "./../images/triangleFinal.png?text=Noc";

class Cards extends React.Component {
  render() {
    return (
      <div id="card1">
        <CardDeck>
          <Card className="" border='dark'style={{ width: '18rem','--color-1': 'white',
          '--color-2': 'light',
          background: `
            linear-gradient(
              170deg,
              var(--color-1),
              var(--color-2) 100%
            )
          ` }}>
          <Card.Img variant="top" src={Logo} />

              <Card.Body>
                <Card.ImgOverlay>
                  <Card.Text className=""style={{fontSize:30,color:'black', textAlign:"center"}}>
                    Listen
                  </Card.Text>
                </Card.ImgOverlay>
                <Card.Header className="Title" style={{background:'transparent'}}>Listen</Card.Header>
                  <Card.Text>
                    First Card
                  </Card.Text>
                <Card.Link href="#" style={{color:'black'}}>Demo</Card.Link>
              </Card.Body>

          </Card>
          <Card className="" border='dark'style={{ width: '18rem','--color-1': 'white',
          '--color-2': 'light',
          background: `
            linear-gradient(
              170deg,
              var(--color-1),
              var(--color-2) 100%
            )
          ` }}>
          <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Header className="Title" style={{background:'transparent'}}>Listen</Card.Header>
              <Card.Text>
                Second Card
              </Card.Text>

              <Card.Link href="#" style={{color:'black'}}>Demo</Card.Link>
            </Card.Body>
          </Card>
          <Card className="" border='dark'style={{ width: '18rem','--color-1': 'white',
          '--color-2': 'light',
          background: `
            linear-gradient(
              170deg,
              var(--color-1),
              var(--color-2) 100%
            )
          ` }}>
          <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Header className="Title" style={{background:'transparent'}}>Listen</Card.Header>
              <Card.Text>
                Third Card
              </Card.Text>

              <Card.Link href="#" style={{color:'black'}}>Demo</Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>

      </div>

    );
  }
}
export default Cards;
