import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBBEUNvQs7dBaPiXjYOW1JqMfcDz6sq368",
  authDomain: "brosworld-78f14.firebaseapp.com",
  projectId: "brosworld-78f14",
  storageBucket: "brosworld-78f14.appspot.com",
  messagingSenderId: "465290062010",
  appId: "1:465290062010:web:a5db7a55817e9aa66b3a83",
  measurementId: "G-YNBP6H9DDG"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
