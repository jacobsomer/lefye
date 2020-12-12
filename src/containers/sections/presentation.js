import React from 'react';
import {Image} from 'react-bootstrap';

import Listen from "./../images/Logos/Listen.svg?text=Noc";
import Listen1 from "./../images/Logos/Listen1.svg?text=Noc";
import Listen2 from "./../images/Logos/Listen2.svg?text=Noc";
import Listen3 from "./../images/Logos/Listen3.svg?text=Noc";

import Logo from "./../images/Logos/spotifyLogo.svg?text=Noc";
import Logo1 from "./../images/Logos/spotifyLogo1.svg?text=Noc";
import Logo2 from "./../images/Logos/spotifyLogo2.svg?text=Noc";
import Logo3 from "./../images/Logos/spotifyLogo3.svg?text=Noc";

import Arrow from "./../images/Logos/Arrow.svg?text=Noc";
import Arrow1 from "./../images/Logos/Arrow1.svg?text=Noc";
import Arrow2 from "./../images/Logos/Arrow2.svg?text=Noc";
import Arrow3 from "./../images/Logos/Arrow3.svg?text=Noc";

import Analytics from "./../images/Logos/analytics.svg?text=Noc";
import Analytics1 from "./../images/Logos/analytics1.svg?text=Noc";
import Analytics2 from "./../images/Logos/analytics2.svg?text=Noc";
import Analytics3 from "./../images/Logos/analytics3.svg?text=Noc";


import {ThemeContext, themes} from './../../libs/contextLib';

function Col(props){
  const cur=props.theme;
  if (cur===themes.dark){
    return (<div>
        <Image src={Logo} style={{height:'auto',width:'18vw'}}fluid />  
        <Image src={Arrow} style={{width:"18vw"}}fluid />  
        <Image src={Analytics} style={{width:"18vw"}} fluid />  
        <Image src={Arrow} style={{width:"18vw"}}fluid />  
        <Image src={Listen} style={{width:"18vw"}}fluid />
      </div>)
  }
  else if (cur===themes.dark1){
    return(<div>
      <Image src={Logo1} style={{height:'auto',width:'18vw'}}fluid />  
      <Image src={Arrow1} style={{width:"18vw"}}fluid />  
      <Image src={Analytics1} style={{width:"18vw"}} fluid />  
      <Image src={Arrow1} style={{width:"18vw"}}fluid />  
      <Image src={Listen1} style={{width:"18vw"}}fluid />
    </div>)
  }
  else if (cur===themes.light){
    return  (<div>
      <Image src={Logo2} style={{height:'auto',width:'18vw'}}fluid />  
      <Image src={Arrow2} style={{width:"18vw"}}fluid />  
      <Image src={Analytics2} style={{width:"18vw"}} fluid />  
      <Image src={Arrow2} style={{width:"18vw"}}fluid />  
      <Image src={Listen2} style={{width:"18vw"}}fluid />
    </div>)
  }
  else{
    return (<div>
      <Image src={Logo3} style={{height:'auto',width:'18vw'}}fluid />  
      <Image src={Arrow3} style={{width:"18vw"}}fluid />  
      <Image src={Analytics3} style={{width:"18vw"}} fluid />  
      <Image src={Arrow3} style={{width:"18vw"}}fluid />  
      <Image src={Listen3} style={{width:"18vw"}}fluid />
    </div>)
  }
}
class Presentation extends React.Component {
  render() {
    return (
      <div id="card1">
        <Col theme={this.props.theme} /> 
      </div>
    );
  }
}
export default Presentation;
