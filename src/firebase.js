import firebase from "firebase";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD9Z2025wzpEayxmkaM09CYrP1ZZaT8d7k"
};

firebase.initializeApp(config);

export default firebase;