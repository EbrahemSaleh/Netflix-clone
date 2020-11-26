import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';



const config = {
  apiKey: "AIzaSyDWgjIgxy8bhL2wA54n-i7QdP8VlXbqX5s",
  authDomain: "netfl-681c6.firebaseapp.com",
  databaseURL: "https://netfl-681c6.firebaseio.com",
  projectId: "netfl-681c6",
  storageBucket: "netfl-681c6.appspot.com",
  messagingSenderId: "92769903465",
  appId: "1:92769903465:web:a9d31577d4532bc1af53f8",
  measurementId: "G-Z6M5FLV8W3"
};


const firebase =  Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };