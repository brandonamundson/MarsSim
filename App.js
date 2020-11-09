// libraries imported from react and react-native
import React, { useState } from 'react';
import {
	ImageBackground,
	Text,
	View,
	TouchableOpacity,
	Image,
	TextInput,
} from 'react-native';
// imports stack navigation components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// imports map components from react-native-maps
import MapView, { Callout, Marker } from 'react-native-maps';

import { styles } from './styles.js';

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
				source={require('./assets/images/mom.jpg')}
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
							source={require('./assets/images/OSIRIS_Mars_true_color.jpg')}
						/>
						<Text style={styles.buttonTxt}>Go to Home Page</Text>
					</TouchableOpacity>
					<View style={styles.buttonMargin} />
					<TouchableOpacity
						onPress={() => navigation.navigate('Mission Control')}
					>
						<Image
							style={styles.buttonImage}
							source={require('./assets/images/1224px-NASA_logo.svg.png')}
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
				source={require('./assets/images/unnamed.jpg')}
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
							source={require('./assets/images/12g_on2014_mastcamintovalley_live-1.jpg')}
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
				source={require('./assets/images/unnamed.jpg')}
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
							source={require('./assets/images/12g_on2014_mastcamintovalley_live-1.jpg')}
						/>
						<Text style={styles.buttonTxt}>How to Play</Text>
					</TouchableOpacity>
					<View style={styles.buttonMargin} />
					<TouchableOpacity
						onPress={() => navigation.navigate('Mission Control')}
					>
						<Image
							style={styles.buttonImage}
							source={require('./assets/images/1224px-NASA_logo.svg.png')}
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
						source={require('./assets/images/OSIRIS_Mars_true_color.jpg')}
					/>
					<Text style={styles.buttonTxt}>Go to Home Page</Text>
				</TouchableOpacity>
				<View style={styles.buttonMargin} />
				<TouchableOpacity
					onPress={() => navigation.navigate('How To Play')}
				>
					<Image
						style={styles.buttonImage}
						source={require('./assets/images/12g_on2014_mastcamintovalley_live-1.jpg')}
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
