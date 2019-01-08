import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_yz7LqWi-lb4eaE2QORFCsEQ8AgVGMuc",
  authDomain: "knedlik-6cfb6.firebaseapp.com",
  databaseURL: "https://knedlik-6cfb6.firebaseio.com",
  projectId: "knedlik-6cfb6",
  storageBucket: "knedlik-6cfb6.appspot.com",
  messagingSenderId: "52997436535",
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;