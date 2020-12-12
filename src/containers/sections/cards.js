import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import CardDeck from 'react-bootstrap/CardDeck';
import Logo from "./../images/spotifyLogo.svg?text=Noc";
import Arrow from "./../images/Arrow_right.svg?text=Noc";

class Cards extends React.Component {
  render() {
    return (
      <div id="card1">
        <img style={{backgroundColor:"transparent",top:"100%",left:"100%",position:"right"}} src={Logo}/>
        <img style={{backgroundColor:"transparent",top:"100%",left:"10%",position:"relative"}} src={Arrow}/>
      </div>
    );
  }
}
export default Cards;
