
import React from 'react';
export const themes={
  dark:{
      body: '#08061f',
      text: '#ff6055',
      borders: '#ffffff',
      gradient: 'linear-gradient(black, #08061f)'},
  light:{
      body: '#f0ad72',
      text: '#ff6055',
      borders: '#000000',
      gradient: 'linear-gradient(white, #f0ad72)'}
    }

export const ThemeContext = React.createContext(
  themes.dark // default value
);