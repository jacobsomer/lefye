
import React from 'react';
export const themes={
  dark:{
      id:"d0",
      body: '#08061f',
      text: 'gold',
      borders: '#ffffff',
      gradient: 'linear-gradient(black, #08061f)'},
  light:{
      id:"l0",
      body: '#f0ad72',
      text: '#ff6055',
      borders: '#000000',
      gradient: 'linear-gradient(white, #f0ad72)'},
  dark1:{
      id:"d1",
      body: '#8CB864',
      text: '#b86664',
      borders: '#b86664',
      gradient: 'linear-gradient(black, #8CB864 200%)'},
  light1:{
      id:"l1",
      body: '#254B49',
      text: '#4b2527',
      borders: '#4b2527',
      gradient: 'linear-gradient(white, #254B49)'},
  dark2:{
      id:"d2",
      body: '#4B253C',
      text: '#ff6055',
      borders: '#ffffff',
      gradient: 'linear-gradient(black, #4B253C 200%)'},
  light2:{
      id:"l2",
      body: '#4B253C',
      text: '#ff6055',
      borders: '#000000',
      gradient: 'linear-gradient(white, #4B253C)'}
    }
 
export const ThemeContext = React.createContext(
  themes.dark // default value
);