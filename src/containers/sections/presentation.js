import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from "./../images/spotifyLogo.svg?text=Noc";
import Arrow from "./../images/Arrow_right.svg?text=Noc";
import Analytics from "./../images/analytics.svg?text=Noc";
import Speakers from "./../images/speakers.svg?text=Noc";
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
class Presentation extends React.Component {
  
  render() {
    return (

      <div id="card1">
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={require({Logo})}
          />
        </View>
        <img  src={Arrow}/>
        <img src={Analytics}/>
        <img src={Arrow}/>
        <img src={Speakers}/>
      </div>
    );
  }
}
export default Presentation;
