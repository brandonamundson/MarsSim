// libraries imported from react and react-native
import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

// "Main" app function, styles are set by the stylesheet below.  Background Image is
// set from assets folder, and Text is output to screen
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/unnamed.jpg')}>
      <Text style={styles.headerText}>Mission to Mars!</Text>
      <Text style={styles.paragraphText}>Mission to Mars is a Mars Simulation.  In this simulation
                                 your goal is to establish a thriving colony on Planet Mars.</Text>
      </ImageBackground>
    </View>
  );
}

// styles are created here
// image sets the background image width/height
// headerText sets text for Heading Style
// paragraphText sets text for normal font style
// colors are chosen by hex code and font family
// has been changed from defaults.  Padding
// for text has been set to allow them to show
// spaced appropriately on screen.
const styles = StyleSheet.create({
  container: {
    flex: 1,
	  alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 60,
    color: '#0011FF',
	  textAlign: 'center',
	  paddingTop: 200,
	  paddingBottom: 25,
	  fontWeight: "bold",
  },
  paragraphText: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: "#00FF00",
	  textAlign: 'center',
  	paddingHorizontal: 15,
  },
});