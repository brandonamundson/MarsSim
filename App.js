// libraries imported from react and react-native
import React, { useState } from 'react';
import {
	ImageBackground,
	Text,
	View,
	StyleSheet,
	Platform,
	TouchableOpacity,
	Image,
	TextInput,
} from 'react-native';
// imports stack navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// imports map components from react-native-maps
import MapView, { Callout, Marker } from 'react-native-maps';

// global variable to store users name, initialized to null
// and changed in the Name Input initial screen
var usrName = null;

// variable that's typecast to function that creates a custom map marker
const CustomMarker = () => (
	<View style={styles.markerView}>
		<Text style={styles.markerText}>Mission Control</Text>
	</View>
);

// How To screen that gives simple instructions and a button to go back to the home screen.
// Styles are set by stylesheet at end of file, button is an outline type to show more background
function HowTo({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require('./assets/mom.jpg')}
			>
				<Text style={styles.headerText}>How To Play</Text>
				<Text style={styles.paragraphText}>
					{usrName}, this has been decades in the making. We are in
					the final stages before having real life Mars missions. This
					app will help inform us if you are qualified for the real
					mission or not.
				</Text>
				<View style={styles.container}>
					<TouchableOpacity onPress={() => navigation.push('Home')}>
						<Image
							style={styles.buttonImage}
							source={require('./assets/OSIRIS_Mars_true_color.jpg')}
						/>
						<Text style={styles.buttonTxt}>Go to Home Page</Text>
					</TouchableOpacity>
					<View style={styles.buttonMargin} />
					<TouchableOpacity
						onPress={() => navigation.navigate('Mission Control')}
					>
						<Image
							style={styles.buttonImage}
							source={require('./assets/1224px-NASA_logo.svg.png')}
						/>
						<Text style={styles.missionControlButtonTxt}>
							Speak to {'\n\n'} Mission Control
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

// This screen gets the Users name and stores it into global variable usrName
// The image button does not allow users to navigate further into the app unless
// the user's name has been changed from a null value.
function nameInput({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require('./assets/unnamed.jpg')}
			>
				<Text style={styles.headerInputText}>Enter your name</Text>
				<TextInput
					style={styles.inputTxt}
					placeholder="Enter Name"
					onChangeText={(text) => (usrName = text)}
				/>
				<View style={(styles.container, { paddingTop: 75 })}>
					<TouchableOpacity
						onPress={() =>
							usrName != null
								? navigation.navigate('Home')
								: alert('Please enter name')
						}
					>
						<Image
							style={styles.loginButtonImage}
							source={require('./assets/12g_on2014_mastcamintovalley_live-1.jpg')}
						/>
						<Text style={styles.loginButtonTxt}>Continue</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

// Home screen, styles are set by the stylesheet at end of file.
// Image background is stored in the assets folder
// text is output to screen and button is defined to only be an outline and will
// take us to the HowTo function
function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require('./assets/unnamed.jpg')}
			>
				<Text style={styles.headerText}>Mission to Mars!</Text>
				<Text style={styles.paragraphText}>
					Welcome {usrName}! Mission to Mars is a Mars Simulation. In
					this simulation your goal is to establish a thriving colony
					on Planet Mars.
				</Text>
				<View style={styles.container}>
					<TouchableOpacity
						onPress={() => navigation.navigate('How To Play')}
					>
						<Image
							style={styles.buttonImage}
							source={require('./assets/12g_on2014_mastcamintovalley_live-1.jpg')}
						/>
						<Text style={styles.buttonTxt}>How to Play</Text>
					</TouchableOpacity>
					<View style={styles.buttonMargin} />
					<TouchableOpacity
						onPress={() => navigation.navigate('Mission Control')}
					>
						<Image
							style={styles.buttonImage}
							source={require('./assets/1224px-NASA_logo.svg.png')}
						/>
						<Text style={styles.missionControlButtonTxt}>
							Speak to {'\n\n'} Mission Control
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

// screen that takes input from user and stores it into temp variable
// called report, sends alert saying report was sent to mission control
// a map of NASA's Mission Control center is shown.
// To make navigation buttons work, they are in containers called
// Callouts.
const missionControl = ({ navigation }) => {
	const [region, setRegion] = useState({
		latitude: 29.558249,
		longitude: -95.08928,
		latitudeDelta: 0.005,
		longitudeDelta: 0.005,
	});
	var report = null;
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				region={region}
				onRegionChangeComplete={(region) => setRegion(region)}
				mapType="satellite"
			>
				<Marker
					coordinate={{ latitude: 29.558486, longitude: -95.08928 }}
				>
					<CustomMarker />
				</Marker>
			</MapView>
			<Callout style={{ alignSelf: 'center', marginTop: 100 }}>
				<TextInput
					style={styles.reportInputTxt}
					placeholder="Report to Mission Control"
					onChangeText={(text) => (report = text)}
					multiline={true}
				/>
				<View style={(styles.container, { paddingTop: 25 })}>
					<TouchableOpacity
						onPress={() =>
							report != null
								? alert(
										'Your report has been submitted to Mission Control.  You will hear back soon.'
								  )
								: alert('Please fill out your report.')
						}
					>
						<Text style={styles.reportButtonTxt}>Submit</Text>
					</TouchableOpacity>
				</View>
			</Callout>
			<Callout style={styles.calloutStyle}>
				<TouchableOpacity onPress={() => navigation.push('Home')}>
					<Image
						style={styles.buttonImage}
						source={require('./assets/OSIRIS_Mars_true_color.jpg')}
					/>
					<Text style={styles.buttonTxt}>Go to Home Page</Text>
				</TouchableOpacity>
				<View style={styles.buttonMargin} />
				<TouchableOpacity
					onPress={() => navigation.navigate('How To Play')}
				>
					<Image
						style={styles.buttonImage}
						source={require('./assets/12g_on2014_mastcamintovalley_live-1.jpg')}
					/>
					<Text style={styles.buttonTxt}>How to Play</Text>
				</TouchableOpacity>
			</Callout>
		</View>
	);
};

// constant global variable that controls the stack navigation
const Stack = createStackNavigator();

// "Main" app function, styles are set by the stylesheet below.  Stack Navigation implementation is setup here.
export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Welcome Screen">
					<Stack.Screen
						name="Welcome Screen"
						component={nameInput}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="How To Play"
						component={HowTo}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Mission Control"
						component={missionControl}
						options={{ headerShown: false }}
					/>
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
		height: Platform.OS === 'web' ? 300 : 120,
		width: Platform.OS === 'web' ? 300 : 120,
		alignSelf: 'center',
	},
	buttonMargin: {
		marginTop: 35,
		marginBottom: 35,
	},
	buttonTxt: {
		alignSelf: 'center',
		marginTop: Platform.OS === 'web' ? -175 : -75,
		fontSize: Platform.OS === 'web' ? 35 : 15,
		color: '#FFFFFF',
		zIndex: 1,
	},
	calloutStyle: {
		position: 'absolute',
		alignSelf: 'center',
		marginTop: 510,
	},
	container: {
		flex: 1,
		alignContent: 'center',
	},
	headerText: {
		fontFamily: 'Roboto',
		fontSize: 60,
		color: '#0011FF',
		textAlign: 'center',
		paddingTop: Platform.OS == 'web' ? 150 : 95,
		paddingBottom: 25,
		fontWeight: 'bold',
	},
	headerInputText: {
		fontFamily: 'Roboto',
		fontSize: 50,
		color: '#0011FF',
		textAlign: 'center',
		paddingTop: 200,
		paddingBottom: 75,
		fontWeight: 'bold',
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
		fontWeight: 'bold',
		paddingHorizontal: 15,
		borderColor: '#999',
		borderStyle: 'solid',
		borderWidth: 3,
	},
	loginButtonImage: {
		height: Platform.OS === 'web' ? 300 : 200,
		width: Platform.OS === 'web' ? 300 : 200,
		alignSelf: 'center',
	},
	loginButtonTxt: {
		alignSelf: 'center',
		marginTop: Platform.OS === 'web' ? -175 : -115,
		fontSize: Platform.OS === 'web' ? 35 : 25,
		color: '#FFFFFF',
		zIndex: 1,
	},
	map: {
		flex: 1,
	},
	markerView: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		backgroundColor: '#00BB00',
		borderColor: '#eee',
		borderRadius: 5,
		elevation: 10,
	},
	markerText: {
		color: '#00f',
		fontWeight: 'bold',
		fontSize: 15,
	},
	missionControlButtonTxt: {
		alignSelf: 'center',
		marginTop: Platform.OS === 'web' ? -175 : -100,
		fontSize: Platform.OS === 'web' ? 35 : 20,
		color: '#0F0',
		fontWeight: 'bold',
		zIndex: 1,
		justifyContent: 'center',
		textAlign: 'center',
	},
	paragraphText: {
		fontFamily: 'Roboto',
		fontSize: 25,
		color: '#00CC70',
		textAlign: 'center',
		paddingHorizontal: 15,
		paddingTop: 25,
		paddingBottom: 50,
		fontWeight: Platform.OS === 'web' ? 'bold' : 'normal',
	},
	reportButtonTxt: {
		alignSelf: 'center',
		fontSize: Platform.OS === 'web' ? 35 : 25,
		color: '#F00',
		fontWeight: 'bold',
		borderColor: '#999',
		borderStyle: 'solid',
		borderWidth: 3,
	},
	reportInputTxt: {
		fontFamily: 'Roboto',
		fontSize: 30,
		color: '#0011FF',
		textAlign: 'center',
		fontWeight: 'bold',
		paddingHorizontal: 15,
		borderColor: '#999',
		borderStyle: 'solid',
		borderWidth: 3,
	},
});
