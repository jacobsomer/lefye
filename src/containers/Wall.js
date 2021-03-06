import React,{ useState } from "react";
import Reccomendation from  "./WallCards/Recommendations";
import Stat from  "./WallCards/Ranking";
import NewsCard from "./WallCards/NewsCard"
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button' 
import Fade from 'react-bootstrap/Fade'

import Logo from './images/waterfall.jpg'
import Logo1 from './images/snow.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import TabPane from 'react-bootstrap/TabPane'
import TabContainer from 'react-bootstrap/TabContainer'
import Image from 'react-bootstrap/Image'
import { CardColumns } from "react-bootstrap";
import Ranking from "./WallCards/Ranking";





class Wall extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      time:null,
      current:0,
      origin: null,
      c1:true,
      c2:true,
      c3:true,
      c4:true,
     
    

    }

  }
  


  visibilityManager(){
  
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {current: state.current + 1}
    });
    if (this.props.theme.position>((this.props.theme.height*1)/10)){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c1: false}
      });
    }
  
    if (this.props.theme.position>((this.props.theme.height*3)/10)){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c2: false}
      });
    }
    
    if (this.props.theme.position>((this.props.theme.height*5)/10)){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c3: false}
      });
    }
  
    if (this.props.theme.position>((this.props.theme.height*7)/10)){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c4: false}
      });
    }
    
  }
   
   

  
  componentDidMount() {
    
    const self= this;
    const d =new Date();
    this.setState({origin:d.getTime()})
    self.time = setInterval(function() {
      self.visibilityManager();
      var d = new Date();
      var seconds = (Math.round(d.getTime() / 1000));
      self.setState({time:(self.state.current.toString() +' --' +self.state.origin+'---'+self.props.theme.width+'---'+self.props.theme.height)});
    }, 1000); 
  
  }



  
    render() {

  
      return (
        <div className="Home" style={{flexDirection: 'row',position:'relative',backgroundImage:this.props.theme.theme.gradient,height:"200vh",width:'100%',top:'0px'}}>
          
          <>
          <style type="text/css">
            {`
              .center {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
               
               
                
              
            }`}
          </style>
          <div className="center" style={{}}>
        
     
          <CardColumns className="mx-auto" style={{position:'relative',maxWidth:'80vw'}}>
            
           
          <Fade in={!(this.state.c1)}>
            <div >
            <NewsCard info={this.props.theme}/>
            </div>
          </Fade>
            
            
            
             
              <div style={{width:'25vw'}}>
              <Fade in={!(this.state.c2)}>
            <div >
            <Stat info={this.props.theme}/>
            </div>
          </Fade>
            </div>
              <div style={{position:'relative',width:'25vw'}}>
              <Fade in={!(this.state.c3)}>
                <div >
                  <Reccomendation info={this.props.theme}/>
                </div>
            </Fade>
            
            </div>  
  
           
          
          
            <div style={{height:''}}>
            <div style={{width:'25vw'}}>
            <Fade in={!(this.state.c1)}>
            <div >
            <Stat info={this.props.theme}/>
            </div>
          </Fade>
            </div>
            <div style={{width:'25vw'}}>
            <Fade in={!(this.state.c2)}>
                <div >
                  <Reccomendation info={this.props.theme}/>
                </div>
            </Fade>
            </div>
            </div>   
            <div style={{width:'25vw'}}>
            <Fade in={!(this.state.c3)}>
            <div >
            <Stat info={this.props.theme}/>
            </div>
          </Fade>
            </div>
            <div style={{width:'25vw'}}>
            <Fade in={!(this.state.c4)}>
                <div >
                  <Reccomendation info={this.props.theme}/>
                </div>
            </Fade>
            </div>
            <div style={{width:'25vw'}}>
            <Fade in={!(this.state.c1)}>
                <div >
                  <Reccomendation info={this.props.theme}/>
                </div>
            </Fade>
            </div>
            
            <div style={{}}>
              <Fade in={!(this.state.c2)}>
                <div >
                  <NewsCard info={this.props.theme}/>
                </div>
            </Fade>
            </div>
            <div style={{width:'25vw'}}>
            <Fade in={!(this.state.c3)}>
                <div >
                  <Stat info={this.props.theme}/>
                </div>
            </Fade>
            </div>
           
          </CardColumns>
          
          </div>
          </>
          
      
        </div>
      );
    }
  }
  export default Wall;


  // <div style={{left:'5vw',top:'5vw',width:'42.5vw',height:'18.75vw',position:'absolute'}}>
  // <Fade in={this.state.c1}>
  //   <div >
  //     <NewsCard info={this.props.theme} text={this.state.time}/>
  //   </div>
  //   </Fade>
    
  //    <div style={{position:'absolute',top:'0px',left:'47.5vw',width:'18.75vw',height:'2.5vw'}}>
  //    <Fade in={this.state.c2}>
  //       <div >
  //         <Reccomendation info={this.props.theme} style={{}}/>
  //       </div>
  //   </Fade>
     
         
  
  //     </div>
  //     <div style={{position:'relative',left:'0',top:'5vw',width:'18.75vw',height:'42.5vw'}}>
  //       <Fade in={this.state.c3}>
  //         <div >
  //           <Reccomendation info={this.props.theme} style={{}}/>
  //         </div>
  //       </Fade>
        
  //       <div style={{position:'absolute',top:'0px',left:'23.75vw',width:'100%',height:'42.5vw'}}>
  //         <Fade in={this.state.c4}>
  //             <div >
  //               <Reccomendation info={this.props.theme} style={{}}/>
  //             </div>
  //         </Fade>
  //       </div>
       
  //       <div style={{position:'relative',top:'5vw',left:'23.75vw',width:'42.5vw',height:'21.25vh'}}>
  //       <Fade in={this.state.c5}>
  //           <div >
  //             <NewsCard  info={this.props.theme}text={this.state.time} style={{top:''}}/>
  //           </div>
  //       </Fade>
          
  //         <div style={{position:'absolute',top:'0vw',left:'-23.75vw',width:'18.75vw',height:'21.25'}}>
  //           <Fade in={this.state.c6}>
  //             <div >
  //               <NewsCard  info={this.props.theme}text={this.state.time} style={{top:''}}/>
  //             </div>
  //           </Fade>
  //         </div>
  //       </div>
  //       <div style={{position:'absolute',top:'5vw',left:'47.5vw',width:'18.75vw',height:'18.25vw'}}>
  //         <Fade in={this.state.c7}>
  //           <div >
  //             <NewsCard  info={this.props.theme}text={this.state.time} style={{top:''}}/>
  //           </div>
  //         </Fade>
  //       </div>
        
  //     </div>
      
     
  // </div>

  
  
