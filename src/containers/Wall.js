import React,{ useState } from "react";

import Ranking from "./WallCards/Ranking";
import Reccomendation from  "./WallCards/Recommendations";
import { Card  } from 'semantic-ui-react';
import NewsCard from "./WallCards/NewsCard"
const items = [
  {
    header: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
]


         
// <Card.Group  >
// <Ranking info={this.props.theme}/>
// <Ranking info={this.props.theme}/>
// <Ranking info={this.props.theme}/>
// <Reccomendation info={this.props.theme}/>
// </Card.Group>   

class Wall extends React.Component {
    render() {
  
      return (
        <div className="Home" style={{ flexDirection: 'row',position:'relative',backgroundImage:this.props.theme.theme.gradient,height:"300vh"}}>
              
            <div style={{width:'400px',height:'100px',position:'absolute'}}>
               <NewsCard  info={this.props.theme} />
            </div>
               
                <Reccomendation info={this.props.theme}/>
                <Ranking info={this.props.theme}/>
                
                <Card
                  href='#card-example-link-card'
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
                <Card
                  href='#card-example-link-card'
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />         
        </div>
      );
    }
  }
  export default Wall;