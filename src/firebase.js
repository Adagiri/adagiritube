import firebase from 'firebase';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD80AVvVjf5eWe_aCyYXLet84aJa3H9rqA",
    authDomain: "adagiritube.firebaseapp.com",
    databaseURL: "https://adagiritube.firebaseio.com",
    projectId: "adagiritube",
    storageBucket: "adagiritube.appspot.com",
    messagingSenderId: "312946361525",
    appId: "1:312946361525:web:2ea1ab5e2cbd7de3c96afc",
    measurementId: "G-X3PV7N2P1F"
  });

  export const db = firebaseConfig.firestore();