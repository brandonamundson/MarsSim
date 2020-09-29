// libraries imported from react and react-native
import React from 'react';
import { ImageBackground, Text, View, StyleSheet} from 'react-native';
// imports full button features from react-native-elements
import { Button } from 'react-native-elements';
// imports stack navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// How To screen that gives simple instructions and a button to go back to the home screen.
// Styles are set by stylesheet at end of file, button is an outline type to show more background
function HowTo( { navigation } ) {
	return (
		<View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/unnamed.jpg')}>
			  <Text style={styles.headerText}>How To Play</Text>
        <Text style={styles.paragraphText}>This has been decades in the making.  We are in the final stages before
                                            having real life Mars missions.  This app will help inform us if you are
                                            qualified for the real mission or not.</Text>
			  <Button buttonStyle={styles.button} type="outline" title="Go to Home Page" onPress={ ()=> navigation.push('Home') } />
      </ImageBackground>
		</View>
	);
}

// Home screen, styles are set by the stylesheet at end of file.
// Image background is stored in the assets folder
// text is output to screen and button is defined to only be an outline and will
// take us to the HowTo function
function Home( { navigation } ) {
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} source={require('./assets/unnamed.jpg')}>
      			<Text style={styles.headerText}>Mission to Mars!</Text>
      			<Text style={styles.paragraphText}>Mission to Mars is a Mars Simulation.  In this simulation
        				                         your goal is to establish a thriving colony on Planet Mars.</Text>
				<Button buttonStyle={styles.button} type="outline" title="How to Play" onPress={ ()=> navigation.navigate('How To Play') } />
			</ImageBackground>
		</View>
	);
}

// constant global variable that controls the stack navigation
const Stack = createStackNavigator();

// "Main" app function, styles are set by the stylesheet below.  Stack Navigation implementation is setup here.
export default function App() {
  return (
    <View style={styles.container}>
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
    	    	<Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        		<Stack.Screen name="How To Play" component={HowTo} options={{ headerShown: false }}/>
      		</Stack.Navigator>
		</NavigationContainer>
    </View>
  );
}

// styles are created here
// image sets the background image width/height
// headerText sets text for Heading Style
// paragraphText sets text for normal font style
// button sets styles for buttons
// colors are chosen by hex code and font family
// has been changed from defaults.  Padding
// for text has been set to allow them to show
// spaced appropriately on screen.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center"
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
    paddingBottom: 75
  },
  button: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
});