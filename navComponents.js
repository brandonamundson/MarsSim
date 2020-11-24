// libraries imported from react and react-native
import React from "react";
import {
	ImageBackground,
	Text,
	View,
	Image,
	TextInput,
	Pressable,
} from "react-native";
// stylesheet imported
import { styles } from "./styles.js";

// global variable to store users name, initialized to null
// and changed in the Name Input initial screen
var usrName = null;

// How To screen that gives simple instructions and a button to go back to the home screen.
// Styles are set by stylesheet at end of file, button is an outline type to show more background
export function HowTo({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require("./assets/images/mom.jpg")}
			>
				<Text style={styles.headerText}>How To Play</Text>
				<Text style={styles.paragraphText}>
					{usrName}, this has been decades in the making. We are in
					the final stages before having real life Mars missions. This
					app will help inform us if you are qualified for the real
					mission or not.
				</Text>
				<View style={styles.container}>
					<Pressable onPress={() => navigation.push("Home")}>
						<Image
							style={styles.buttonImage}
							source={require("./assets/images/OSIRIS_Mars_true_color.jpg")}
						/>
						<Text style={styles.buttonTxt}>Go to Home Page</Text>
					</Pressable>
					<View style={styles.buttonMargin} />
					<Pressable
						onPress={() => navigation.navigate("Mission Control")}
					>
						<Image
							style={styles.buttonImage}
							source={require("./assets/images/1224px-NASA_logo.svg.png")}
						/>
						<Text style={styles.missionControlButtonTxt}>
							Speak to {"\n\n"} Mission Control
						</Text>
					</Pressable>
				</View>
			</ImageBackground>
		</View>
	);
}

// This screen gets the Users name and stores it into global variable usrName
// The image button does not allow users to navigate further into the app unless
// the user's name has been changed from a null value.
export function nameInput({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require("./assets/images/unnamed.jpg")}
			>
				<Text style={styles.headerInputText}>Enter your name</Text>
				<TextInput
					style={styles.inputTxt}
					placeholder="Enter Name"
					onChangeText={(text) => (usrName = text)}
				/>
				<View style={(styles.container, { paddingTop: 75 })}>
					<Pressable
						onPress={() =>
							usrName != null
								? navigation.navigate("Home")
								: alert("Please enter name")
						}
					>
						<Image
							style={styles.loginButtonImage}
							source={require("./assets/images/12g_on2014_mastcamintovalley_live-1.jpg")}
						/>
						<Text style={styles.loginButtonTxt}>Continue</Text>
					</Pressable>
				</View>
			</ImageBackground>
		</View>
	);
}

// Home screen, styles are set by the stylesheet at end of file.
// Image background is stored in the assets folder
// text is output to screen and button is defined to only be an outline and will
// take us to the HowTo function
export function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require("./assets/images/unnamed.jpg")}
			>
				<Text style={styles.headerText}>Mission to Mars!</Text>
				<Text style={styles.paragraphText}>
					Welcome {usrName}! Mission to Mars is a Mars Simulation. In
					this simulation your goal is to establish a thriving colony
					on Planet Mars.
				</Text>
				<View style={styles.container}>
					<Pressable
						onPress={() => navigation.navigate("How To Play")}
					>
						<Image
							style={styles.buttonImage}
							source={require("./assets/images/12g_on2014_mastcamintovalley_live-1.jpg")}
						/>
						<Text style={styles.buttonTxt}>How to Play</Text>
					</Pressable>
					<View style={styles.buttonMargin} />
					<Pressable
						onPress={() => navigation.navigate("Mission Control")}
					>
						<Image
							style={styles.buttonImage}
							source={require("./assets/images/1224px-NASA_logo.svg.png")}
						/>
						<Text style={styles.missionControlButtonTxt}>
							Speak to {"\n\n"} Mission Control
						</Text>
					</Pressable>
				</View>
			</ImageBackground>
		</View>
	);
}
