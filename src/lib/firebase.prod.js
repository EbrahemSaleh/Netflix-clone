import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';


const config = {
  apiKey: "AIzaSyBMC8SgnevD0-ATDYNMEePwenIOdtGDpcc",
  authDomain: "netfilx-eca88.firebaseapp.com",
  databaseURL: "https://netfilx-eca88.firebaseio.com",
  projectId: "netfilx-eca88",
  storageBucket: "netfilx-eca88.appspot.com",
  messagingSenderId: "769703362201",
  appId: "1:769703362201:web:d22bb72f1c402b0922c208",
  measurementId: "G-Z21M040LL2"
};


const firebase =  Firebase.initializeApp(config);

// seedDatabase(firebase);


export {firebase}