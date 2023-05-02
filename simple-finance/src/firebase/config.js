import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDRHl0zntGtx65T9xDKYLk5D3sQoLFwNcU',
  authDomain: 'kazy-finance.firebaseapp.com',
  projectId: 'kazy-finance',
  storageBucket: 'kazy-finance.appspot.com',
  messagingSenderId: '1091610249963',
  appId: '1:1091610249963:web:61b1171eb32da829d34cae',
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
