// libraries imported from react and react-native
import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Platform, TouchableOpacity, Image, TextInput } from 'react-native';
// imports stack navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// global variable to store users name, initialized to null
// and changed in the Name Input initial screen
var usrName = null;

// How To screen that gives simple instructions and a button to go back to the home screen.
// Styles are set by stylesheet at end of file, button is an outline type to show more background
function HowTo( { navigation } ) {
	return (
		<View style={styles.container}>
      		<ImageBackground style={styles.image} source={require('./assets/mom.jpg')}>
				<Text style={styles.headerText}>How To Play</Text>
       			<Text style={styles.paragraphText}>{usrName}, this has been decades in the making.  We are in the final stages before
                                            	having real life Mars missions.  This app will help inform us if you are
                                         	   	qualified for the real mission or not.</Text>
				<View style={styles.container}>
			  		<TouchableOpacity onPress={ ()=> navigation.push('Home') } >
						<Image style={styles.buttonImage} source={require('./assets/OSIRIS_Mars_true_color.jpg')} />
						<Text style={styles.buttonTxt}>Go to Home Page</Text>
					</TouchableOpacity>
				</View>
	  		</ImageBackground>
		</View>
	);
}

// This screen gets the Users name and stores it into global variable usrName
// The image button does not allow users to navigate further into the app unless 
// the user's name has been changed from a null value.
function nameInput( { navigation } ) {
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} source={require('./assets/unnamed.jpg')}>
				<Text style={styles.headerInputText}>Enter your name</Text>
				<TextInput style={styles.inputTxt} placeholder="Enter Name" onChangeText={text => usrName = text} />
				<View style={styles.container, {paddingTop: 75}}>
					<TouchableOpacity onPress={ () => usrName!=null ? navigation.navigate('Home') : alert('Please enter name') } >
						<Image style={styles.buttonImage} source={require('./assets/12g_on2014_mastcamintovalley_live-1.jpg')} />
						<Text style={styles.buttonTxt}>Continue</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	)
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
      			<Text style={styles.paragraphText}>Welcome {usrName}!  Mission to Mars is a Mars Simulation.  In this simulation
        				                         your goal is to establish a thriving colony on Planet Mars.</Text>
				<View style={styles.container}>
					<TouchableOpacity onPress={ ()=> navigation.navigate('How To Play') } >
						<Image style={styles.buttonImage} source={require('./assets/12g_on2014_mastcamintovalley_live-1.jpg')} />
						<Text style={styles.buttonTxt}>How to Play</Text>
					</TouchableOpacity>
				</View>
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
			<Stack.Navigator initialRouteName='Welcome Screen'>
    	    	<Stack.Screen name="Welcome Screen" component={nameInput} options={{ headerShown:false }} />
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
// Platform.OS changes styles based on OS type
const styles = StyleSheet.create({
	buttonImage: {
		height: Platform.OS === 'web' ? 300 : 200,
		width: Platform.OS === 'web' ? 300 : 200,
		alignSelf:"center",
	},
	buttonTxt: {
		alignSelf:'center',
		marginTop: Platform.OS === 'web' ? -175 : -115,
		fontSize: Platform.OS === 'web' ? 35 : 25,
		color:'#FFFFFF',
		zIndex:1
	},
	container: {
    	flex: 1,
    	alignContent: "center",
	},
	headerText: {
		fontFamily: 'Roboto',
		fontSize: 60,
		color: '#0011FF',
		textAlign: 'center',
		paddingTop: Platform.OS =='web' ? 150 : 95,
		paddingBottom: 25,
		fontWeight: "bold",
	},
	headerInputText: {
		fontFamily: 'Roboto',
		fontSize: 50,
		color: '#0011FF',
		textAlign: 'center',
		paddingTop: 200,
		paddingBottom: 75,
		fontWeight: "bold",
	},
	image: {
		width: '100%',
		height: '100%',
		opacity: 100,
	},
	inputTxt: {
		fontFamily: 'Roboto',
		fontSize: 35,
		color: '#0011FF',
		textAlign: 'center',
		fontWeight: "bold",		
		paddingHorizontal: 15,
		borderColor: '#999',
		borderStyle: 'solid',
		borderWidth: 3,
	},
	paragraphText: {
    	fontFamily: 'Roboto',
    	fontSize: 25,
		color: "#00CC70",
		textAlign: 'center',
		paddingHorizontal: 15,
		paddingTop:25,
		paddingBottom: 50,
		fontWeight: Platform.OS === 'web' ? 'bold' : "normal",
	},
});