import * as firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDArwBleLrDIWQ24rdy3TmlTKbr2zKwGsQ",
  authDomain: "fir-auth-132f1.firebaseapp.com",
  databaseURL: "https://fir-auth-132f1.firebaseio.com",
  projectId: "fir-auth-132f1",
  storageBucket: "fir-auth-132f1.appspot.com",
  messagingSenderId: "261786996083",
  appId: "1:261786996083:web:6e620295ea524836344906",
  measurementId: "G-R8L7DM6B68",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
