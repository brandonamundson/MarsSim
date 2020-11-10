import { StyleSheet, Platform } from "react-native";

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
export const styles = StyleSheet.create({
	buttonImage: {
		height: Platform.OS === "web" ? 300 : 120,
		width: Platform.OS === "web" ? 300 : 120,
		alignSelf: "center",
	},
	buttonMargin: {
		marginTop: 35,
		marginBottom: 35,
	},
	buttonTxt: {
		alignSelf: "center",
		marginTop: Platform.OS === "web" ? -175 : -75,
		fontSize: Platform.OS === "web" ? 35 : 15,
		color: "#FFFFFF",
		zIndex: 1,
	},
	calloutStyle: {
		position: "absolute",
		alignSelf: "center",
		marginTop: 510,
	},
	container: {
		flex: 1,
		alignContent: "center",
	},
	headerText: {
		fontFamily: "Roboto",
		fontSize: 60,
		color: "#0011FF",
		textAlign: "center",
		paddingTop: Platform.OS == "web" ? 150 : 95,
		paddingBottom: 25,
		fontWeight: "bold",
	},
	headerInputText: {
		fontFamily: "Roboto",
		fontSize: 50,
		color: "#0011FF",
		textAlign: "center",
		paddingTop: 200,
		paddingBottom: 75,
		fontWeight: "bold",
	},
	image: {
		width: "100%",
		height: "100%",
		opacity: 100,
	},
	inputTxt: {
		fontFamily: "Roboto",
		fontSize: 35,
		color: "#0011FF",
		textAlign: "center",
		fontWeight: "bold",
		paddingHorizontal: 15,
		borderColor: "#999",
		borderStyle: "solid",
		borderWidth: 3,
	},
	loginButtonImage: {
		height: Platform.OS === "web" ? 300 : 200,
		width: Platform.OS === "web" ? 300 : 200,
		alignSelf: "center",
	},
	loginButtonTxt: {
		alignSelf: "center",
		marginTop: Platform.OS === "web" ? -175 : -115,
		fontSize: Platform.OS === "web" ? 35 : 25,
		color: "#FFFFFF",
		zIndex: 1,
	},
	map: {
		flex: 1,
	},
	markerView: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		backgroundColor: "#00BB00",
		borderColor: "#eee",
		borderRadius: 5,
		elevation: 10,
	},
	markerText: {
		color: "#00f",
		fontWeight: "bold",
		fontSize: 15,
	},
	missionControlButtonTxt: {
		alignSelf: "center",
		marginTop: Platform.OS === "web" ? -175 : -100,
		fontSize: Platform.OS === "web" ? 35 : 20,
		color: "#0F0",
		fontWeight: "bold",
		zIndex: 1,
		justifyContent: "center",
		textAlign: "center",
	},
	paragraphText: {
		fontFamily: "Roboto",
		fontSize: 25,
		color: "#00CC70",
		textAlign: "center",
		paddingHorizontal: 15,
		paddingTop: 25,
		paddingBottom: 50,
		fontWeight: Platform.OS === "web" ? "bold" : "normal",
	},
	reportButtonTxt: {
		alignSelf: "center",
		fontSize: Platform.OS === "web" ? 35 : 25,
		color: "#F00",
		fontWeight: "bold",
		borderColor: "#999",
		borderStyle: "solid",
		borderWidth: 3,
	},
	reportInputTxt: {
		fontFamily: "Roboto",
		fontSize: 30,
		color: "#0011FF",
		textAlign: "center",
		fontWeight: "bold",
		paddingHorizontal: 15,
		borderColor: "#999",
		borderStyle: "solid",
		borderWidth: 3,
	},
});
