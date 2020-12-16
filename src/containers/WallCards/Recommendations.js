import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './Recommendations.css'
class Reccomendation extends React.Component{
  render() {
  return(
    <Card className="image-container" fluid={false} style={{backgroundColor:this.props.info.theme.text}}>
        <Image style={{display: 'inline-block'}}src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={true} />
      <Card.Content style={{display: 'inline-block'}} >
        <Card.Header>Daniel</Card.Header>``
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content>      
    </Card>
  );
  }
}




export default Reccomendation
