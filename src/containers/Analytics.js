import React, { Component } from 'react';
import "./Analytics.css"

export const authEndpoint = 'https://accounts.spotify.com/authorize';
class SpotifyAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticatedWithSpotify: false
      // menu: this.props.userId.menu
    };
    this.state.handleRedirect = this.handleRedirect.bind(this);
  }

  generateRandomString(length) {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getHashParams() {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {
    //if (this.props.isAuthenticated) {
    const params = this.getHashParams();

    const access_token = params.access_token;
    const state = params.state;
    const storedState = localStorage.getItem('stateKey');

    if (window.localStorage.getItem('spotifyAuthToken')) {
      this.setState({ isAuthenticatedWithSpotify: true });
    }
    if (access_token && (state == null || state !== storedState)) {
      alert('Click "ok" to finish authentication with Spotify');
    } else {
      localStorage.removeItem('stateKey');
    }
    console.log(access_token);
    // DO STUFF WITH ACCEES TOKEN HERE
    // this.props.onConnectWithSpotify(access_token);
  }

  handleRedirect(event) {
    event.preventDefault();

    const params = this.getHashParams();
    const access_token = params.access_token;

    const state = this.generateRandomString(16);
    localStorage.setItem('stateKey', state);
    localStorage.setItem('spotifyAuthToken', access_token);
    let url =
      'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=5403b9779ca549be90741adbe53d1b09' +
      '&scope=' +
      encodeURIComponent('user-read-private%20user-top-read%20user-library-read%20user-follow-read') +
      '&redirect_uri=' +
      encodeURIComponent('http://localhost:3000/analytics-vis');
    window.location = url;
  }

  render() {
    return (
      <div className="button_container">
        <button
          className="sp_button"
          style={{background:this.props.theme.theme.gradient,width:"100%"}}
          onClick={(event) => this.handleRedirect(event)}
        >
          <strong>LINK YOUR SPOTIFY ACCOUNT</strong>
        </button>
      </div>
    );
  }
}

export default SpotifyAuth;