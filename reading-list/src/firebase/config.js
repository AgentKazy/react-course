import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCjWGRrF9ALyFg-eoKqQBuByeg_YSER_8o',
  authDomain: 'kazy-readinglist.firebaseapp.com',
  projectId: 'kazy-readinglist',
  storageBucket: 'kazy-readinglist.appspot.com',
  messagingSenderId: '749061300529',
  appId: '1:749061300529:web:b8e6405056652b1b889010',
};

// Init Firebase
initializeApp(firebaseConfig);

// Init Firestore
const db = getFirestore();

// Init Firebase Auth
const auth = getAuth();

export { db, auth };
