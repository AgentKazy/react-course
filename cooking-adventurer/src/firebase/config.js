import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5MxFX8M2VZqkyn8NbkiRz-GijfWfsOn4',
  authDomain: 'cooking-adventurer-site.firebaseapp.com',
  projectId: 'cooking-adventurer-site',
  storageBucket: 'cooking-adventurer-site.appspot.com',
  messagingSenderId: '889778562717',
  appId: '1:889778562717:web:5f5bdce600190babbf9674',
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
