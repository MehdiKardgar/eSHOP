// Importing the firebase library/module to set up Firebase functionalities
import firebase from "firebase";

// Configuration object containing credentials and settings for Firebase services
const firebaseConfig = {
  apiKey: "AIzaSyBv6zEONDVJSxOlkxmyUVto6eWksYVXwSU", // Unique identifier for accessing Firebase services
  authDomain: "eshop-c2e0a.firebaseapp.com", // Domain used for authentication
  projectId: "eshop-c2e0a", // Unique ID for your Firebase project
  storageBucket: "eshop-c2e0a.appspot.com", // Storage location for Firebase resources
  messagingSenderId: "941031253944", // Sender ID for Firebase Cloud Messaging
  appId: "1:941031253944:web:0bc5a43bc9fe9af86e514d", // Unique ID for your Firebase app
  measurementId: "G-5BDLQRB305", // ID for Google Analytics
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // Initializing the Firebase app with the provided configuration

const db = firebaseApp.firestore(); // Accessing Firestore service from the initialized Firebase app

const auth = firebase.auth(); // Accessing Authentication service from the initialized Firebase app

export { db, auth }; // Exporting the Firestore and Authentication services to be used across the app
