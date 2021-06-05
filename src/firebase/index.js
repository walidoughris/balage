import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABZI1GFHLww4PV1OuxJSL6YKqLqsWe-Uw",
  authDomain: "walid-balage.firebaseapp.com",
  projectId: "walid-balage",
  storageBucket: "walid-balage.appspot.com",
  messagingSenderId: "1027625159537",
  appId: "1:1027625159537:web:1362c1a1f71f2e057dc4d0",
  measurementId: "G-6P2HPN1W19"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
export default firebase;