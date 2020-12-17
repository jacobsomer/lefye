import React from 'react';
import "./AnalyticsVis.css"
import CNTRLR from './CNTRLR'

const getCode = async () => {
    let url = window.location.href;
    return url.split('=')[1];

}

getCode().then((result) => {
    localStorage.setItem('spotifyAuthToken', result);
});


const fetch = require('node-fetch');

const sendCode = async () => {
    const res = await fetch('https://lefyeserver.herokuapp.com/token', {
        method: "POST",
        body: JSON.stringify({code:localStorage.getItem('spotifyAuthToken')})
    });
    const data = await res.json();
    return data;
}


let isClicked = false;

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            click:isClicked
        };
        this.toggleButton=()=>{
            sendCode()
                .then(data => {
                    console.log(data)
                    localStorage.setItem('userDisplayName', data.userData[0].display_name)
                    var topTracks = []
                    for(var i = 0; i < data.userData[1].items.length; i++) {
                        topTracks[i] = data.userData[1].items[i].name
                    }
                    localStorage.setItem('topTracks', topTracks)
                    var topArtists = []
                    for(var i = 0; i < data.userData[2].items.length; i++) {
                        topArtists[i] = data.userData[2].items[i].name
                    }
                    localStorage.setItem('topArtists', topArtists)
                    this.setState({click:true})             
                })                       
                .catch(error => {
                    console.log(error)
                })
        };
    }
  render() {
    return (
      <div>
        <div style={{position: ''}}>
            <div className="landed" style={{position: 'relative',background:this.props.theme.theme.gradient,width:"100%"}}>
                <h1>A N A L Y T I C S</h1>
                {!this.state.click ? (<button onClick={this.toggleButton}>Get Analytics</button>):(
                    <div className="data">
                        <h3 style={{position:'relative'}}>Welcome, {localStorage.getItem('userDisplayName')}!</h3>
                    </div>
                )}
            </div>
        </div>
      </div>
    );
  }
}