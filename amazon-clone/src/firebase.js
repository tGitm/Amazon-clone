import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTpsujrzcJ_lPFCI9WgO1ZILWv8LzFjc4",
  authDomain: "clone-f31ce.firebaseapp.com",
  databaseURL: "https://clone-f31ce.firebaseio.com",
  projectId: "clone-f31ce",
  storageBucket: "clone-f31ce.appspot.com",
  messagingSenderId: "854601590102",
  appId: "1:854601590102:web:9fed459103ec2af9b422f7",
  measurementId: "G-HT4VY28HTE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};