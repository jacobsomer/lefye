import React from 'react';
import { Card } from 'react-bootstrap';
import './Recommendations.css';
import Logo from './../images/snow.jpg';
import Logo1 from './../images/waterfall.jpg'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import CardColumns from 'react-bootstrap/CardColumns'


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
      return (
        
        <Card style={{maxWidth:'25vw'}}><div>
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
               
              
                    <ListGroup>
                      <ListGroup.Item action onClick={() => this.b1()}>
                       {this.state.image}
                      </ListGroup.Item>
                      <ListGroup.Item action onClick={() => this.b2()}>
                        Link 2
                      </ListGroup.Item>
                      <ListGroup.Item action onClick={() => this.b3()}>
                        Link 3
                      </ListGroup.Item>
                      <ListGroup.Item action onClick={() => this.b4()}>
                        Link 4
                      </ListGroup.Item>
                      <ListGroup.Item action onClick={() => this.b5()}>
                        Link 5
                      </ListGroup.Item>
                    </ListGroup>
       
             </Card>
        //  {(this.state.theme.id==="d0" || this.state.theme.id==="d1" || this.state.theme.id==="d2") ? (
        //   <Button variant="outline-light" style={{color:this.state.theme.text,border:this.state.theme.text}}onClick={this.toggleTheme}>Light Mode</Button>
        // ) : (
        //   <>
        //    <Button variant="outline-dark" style={{color:this.state.theme.text,border:this.state.theme.text}}onClick={this.toggleTheme}>Dark Mode</Button>
        //   </>
        // )}

      );
    }
  }
  export default NewsCard;
