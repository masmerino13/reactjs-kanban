import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDIvA-24BDAJs65jyu8pwjYS9Kg1haJhuI",
  authDomain: "kaban-6ed1e.firebaseapp.com",
  databaseURL: "https://kaban-6ed1e.firebaseio.com",
  projectId: "kaban-6ed1e",
  storageBucket: "kaban-6ed1e.appspot.com",
  messagingSenderId: "692553248575",
  appId: "1:692553248575:web:32ea33b37c823449e3ad8a"
};

firebase.initializeApp(config);

const database = firebase.firestore();
const firestore = firebase.firestore;
const storage = firebase.storage().ref();

export default {
  database,
  storage,
  firestore,
};

