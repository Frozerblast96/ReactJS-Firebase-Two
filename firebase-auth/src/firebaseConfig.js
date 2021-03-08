import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-0QJ9jvxYDcaLN7z14Nym1Owm938TrY8",
    authDomain: "auth-react-firebase-ee845.firebaseapp.com",
    projectId: "auth-react-firebase-ee845",
    storageBucket: "auth-react-firebase-ee845.appspot.com",
    messagingSenderId: "865751593743",
    appId: "1:865751593743:web:41ff68a71758f8791fc47a",
    measurementId: "G-S7V7FCFX90"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth();
  export { auth }