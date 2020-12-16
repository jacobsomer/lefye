import React from "react";
import { Card, Feed } from 'semantic-ui-react'
import Logo from './../images/Speaker.png'

class Ranking extends React.Component {
    render() {
    
  
      return (
            <Card color={this.props.info.theme.borders} style={{background:this.props.info.theme.text}}>
              <Card.Content>
                <Card.Header style={{color:this.props.info.theme.body}}>Top 5 Songs of the Week</Card.Header>
              </Card.Content>
              <Card.Content>
                <Feed>
                  <Feed.Event>
                    <Feed.Label image={Logo} />
                    <Feed.Content>
                      <Feed.Summary style={{color:this.props.info.theme.body}}>
                         <a>Jenny Twist</a> wants your <a>coworkers</a>.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image={Logo} />
                    <Feed.Content>
                      <Feed.Summary style={{color:this.props.info.theme.body}}>
                        You added <a>Molly Malone</a> as a friend.
                      </Feed.Summary >
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image={Logo} />
                    <Feed.Content>
                      <Feed.Summary style={{color:this.props.info.theme.body}}>
                        You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                  <Feed.Event>
                    <Feed.Label image={Logo} />
                    <Feed.Content>
                      <Feed.Summary style={{color:this.props.info.theme.body}}>
                        You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                  <Feed.Event>
                    <Feed.Label image={Logo} />
                    <Feed.Content>
                      <Feed.Summary style={{color:this.props.info.theme.body}}>
                        You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Card.Content>
              </Card>
       
      );
    }
  }
  export default Ranking;
