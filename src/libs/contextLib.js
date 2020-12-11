
import React from 'react';
export const themes={
  dark:{
      body: '#25294b',
      text: '#ff6055',
      borders: 'white',
      gradient: 'linear-gradient(black, #25294b)'},
  light:{
      body: '#f0ad72',
      text: '#ff6055',
      borders: 'black',
      gradient: 'linear-gradient(white, #f0ad72)'}
    }

export const ThemeContext = React.createContext(
  themes.dark // default value
);