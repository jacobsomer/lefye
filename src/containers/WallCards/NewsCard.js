import React from 'react';
import { Card, OverlayTrigger,Popover } from 'react-bootstrap';
import './Recommendations.css';
import Logo from './../images/snow.jpg';
import Logo1 from './../images/waterfall.jpg'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import CardColumns from 'react-bootstrap/CardColumns'

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);



class NewsCard extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      image:1,
    }
   
  }
  b1() {
    
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {image:1}
    });}


  b2() {

    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {image:2}
    });}
  b3() {

    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {image:3}
    });}

    b4() {

      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {image:4}
      });}
      b5() {

        this.setState((state) => {
          // Important: read `state` instead of `this.state` when updating.
          return {image:5}
        });}

  
    render() {

      const popover = (
        <Popover style={{backgroundColor:this.props.info.theme.body}}id="popover-basic">
          <Popover.Title style={{color:this.props.info.theme.text,backgroundColor:this.props.info.theme.body}} as="h3">Popover right</Popover.Title>
          <Popover.Content style={{color:this.props.info.theme.text,backgroundColor:this.props.info.theme.body}}>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
      );
      return (
        <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>

    
        <Card style={{maxWidth:'25vw',background:this.props.info.theme.text}}><div>
          {(this.state.image==1)? (<Card.Img variant="top" src={Logo1}/>):(
                <>
                 {(this.state.image==2)? (<Card.Img variant="top" src={Logo}/>):(
                
                <>
                 {(this.state.image==3)? (<Card.Img variant="top" src={Logo1}/>):(
                
                <>
                {(this.state.image==4)? (<Card.Img variant="top" src={Logo}/>):(
               
               <Card.Img variant="top" src={Logo1}/>
              
             )
           
             }
              </>
               
              )
            
              }
               </>
               
              )
            
              }
               </>
              )
            
              }
        </div>
               
              
                    <ListGroup style={{background:this.props.info.theme.body}}>
                      <ListGroup.Item style={{color:this.props.info.theme.body,background:this.props.info.theme.text}} action onClick={() => this.b1()}>
                       {this.state.image}
                      </ListGroup.Item>
                      <ListGroup.Item style={{color:this.props.info.theme.body,background:this.props.info.theme.text}} action onClick={() => this.b2()}>
                        Link 2
                      </ListGroup.Item>
                      <ListGroup.Item style={{color:this.props.info.theme.body,background:this.props.info.theme.text}} action onClick={() => this.b3()}>
                        Link 3
                      </ListGroup.Item>
                      <ListGroup.Item style={{color:this.props.info.theme.body,background:this.props.info.theme.text}} action onClick={() => this.b4()}>
                        Link 4
                      </ListGroup.Item>
                      <ListGroup.Item style={{color:this.props.info.theme.body,background:this.props.info.theme.text}} action onClick={() => this.b5()}>
                        Link 5
                      </ListGroup.Item>
                    </ListGroup>
       
             </Card>
             </OverlayTrigger>
       

      );
    }
  }
  export default NewsCard;
