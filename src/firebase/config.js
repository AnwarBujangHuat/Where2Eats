import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
require('firebase/compat/auth');
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHCZuPLY7PuyG4vBTDYbQfsa2ZNEHwpRs",
  authDomain: "where2eat-e075f.firebaseapp.com",
  databaseURL: "https://where2eat-e075f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "where2eat-e075f",
  storageBucket: "where2eat-e075f.appspot.com",
  messagingSenderId: "452192891402",
  appId: "1:452192891402:web:07a56bf72456e3592265f3",
  measurementId: "G-JNW723Y4PC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
