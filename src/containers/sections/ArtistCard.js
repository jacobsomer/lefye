import React from 'react'

import { CardView } from 'react-card-with-image'
import './ArtistCard.css'
import  Phone from "./../images/phone.svg";
import  Stack from "./../images/stack.svg";
import Speaker from "./../images/speaker3.svg";

const App = (props) => {
    const items = [
        {
          id: 1,
          header:  <h1 style={{color:props.color,fontSize:"100%"}}>
                Loren Ipsum
            </h1>,
          description:
            <h1 style={{color:props.color,boxShadow:"red",fontSize:"100%"}}>
                'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat
            </h1>,
          image:
            Phone
          
        },
        {
          id: 2,
          header:  <h1 style={{color:props.color,fontSize:"100%"}}>
                Loren Ipsum
            </h1>,
          description:
            <h1 style={{color:props.color,boxShadow:"red",fontSize:"100%"}}>
                'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat
            </h1>,
          image: Stack
        },
        {
          id: 3,
          header:  <h1 style={{color:props.color,fontSize:"100%"}}>
                Loren Ipsum
            </h1>,
          description:
            <h1 style={{color:props.color,boxShadow:"red",fontSize:"100%"}}>
                'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat
            </h1>,
          image: Speaker
        }
      ]
       return (
    <CardView
      items={items}
      activeColor={props.color}
      imageHeight='50%'
      imageWidth='40%'
    />
  ) 
}

export default App