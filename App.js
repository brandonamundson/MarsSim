// libraries imported from react and react-native
import React, { useState } from 'react';
import {
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
// imports audio components from expo-av
import { Audio } from 'expo-av';
// moved certain functions and styles to their own file to save room
import { styles } from './styles.js';
import { nameInput, Home, HowTo } from './navComponents.js';

// variable that's typecast to function that creates a custom map marker
const CustomMarker = () => (
	<View style={styles.markerView}>
		<Text style={styles.markerText}>Mission Control</Text>
	</View>
);

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

var playbackInstance = null;

const setAudio = () => {
	Audio.setAudioModeAsync( {
		allowsRecordingIOS: false,
		interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
		playsInSilentModeIOS: true,
		shouldDuckAndroid: true,
		interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
		playThroughEarpieceAndroid: false,
	   });
	   //  This function will be called
	   loadAudio(true);
}

async function loadAudio (playing) {
	if (playbackInstance != null) {
		await playbackInstance.unloadAsync();
		playbackInstance.setOnPlaybackStatusUpdate(null);
		playbackInstance = null;
	}
	const source = require('./assets/audio/theme.mp3');
	const initialStatus = {
		// Play by default
		shouldPlay: true,
		// Control the speed
		rate: 1.0,
		// Correct the pitch
		shouldCorrectPitch: true,
		// Control the Volume
		volume: 1,
		// mute the Audio
		isMuted: false
	};
	const sound = await Audio.Sound.createAsync( source, initialStatus );
	// Save the response of sound in playbackInstance
	playbackInstance = sound;
	//  Make the loop of Audio
	sound.setIsLoopingAsync(true);
	//  Play the Music
	sound.playAsync();
}

// "Main" app function, styles are set by the stylesheet below.  Stack Navigation implementation is setup here.
export default function App() {
	setAudio();
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
