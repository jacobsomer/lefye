import fetch from 'node-fetch';

export default class CNTRLR {
    constructor(token) {
        this.token = token;
    }

    getTopArtists = async () => {
        const res = await fetch('https://api.spotify.com/v1/me/top/artists', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + this.token,
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
        });
        const data = await res.json();
        return data;
    }

    getTopTracks = async () => {
        const res = await fetch('https://api.spotify.com/v1/me/top/tracks', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + this.token,
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
        });
        const data = await res.json();
        return data;
    }

    getUserProfile = async () => {
        const res = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + this.token,
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
        });
        const data = await res.json();
        return data;        
    }

    getSavedAlbums = async () => {
        const res = await fetch('https://api.spotify.com/v1/me/albums', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + this.token
            },
        });
        const data = await res.json();
        return data; 
    }

    getSavedTracks = async () => {
        const res = await fetch('https://api.spotify.com/v1/me/tracks', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + this.token
            },
        });
        const data = await res.json();
        return data; 
    }

    getAlbumTracks = async (id) => {
        const res = await fetch('https://api.spotify.com/v1/albums/' + id + '/tracks', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + this.token
            },
        });
        const data = await res.json();
        return data; 
    }

    getArtistRelatedArtists = async (id) => {
        const res = await fetch('https://api.spotify.com/v1/artists/' + id + '/related-artists', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + this.token
            },
        });
        const data = await res.json();
        return data; 
    }

    getArtistTopTracks = async (id) => {
        const res = await fetch('https://api.spotify.com/v1/artists/' + id + '/top-tracks', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + this.token
            },
        });
        const data = await res.json();
        return data; 
    }
}