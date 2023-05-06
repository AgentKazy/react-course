import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDMNlizaG4S91RGvraEI6M5pVCyX2Z4u5E',
  authDomain: 'frostfall-web.firebaseapp.com',
  projectId: 'frostfall-web',
  storageBucket: 'frostfall-web.appspot.com',
  messagingSenderId: '671911324267',
  appId: '1:671911324267:web:709abdc060c2a177ba9f2e',
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
