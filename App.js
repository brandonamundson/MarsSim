import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/mars_base_nasa_original.jpg')}>
      <Text style={styles.headerText}>Mission to Mars!</Text>
      <Text style={styles.paragraphText}>Mission to Mars is a Mars Simulation.  In this simulation
                                 your goal is to establish a thriving colony on Planet Mars.</Text>
      </ImageBackground>
    </View>
  );
}

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
    fontFamily: 'monospace',
    fontSize: 28,
    color: 'white',
	textAlign: 'center',
	paddingTop: 300,
	paddingBottom: 25,
  },
  paragraphText: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: 'white',
	textAlign: 'center',
	paddingHorizontal: 15,
  },
});