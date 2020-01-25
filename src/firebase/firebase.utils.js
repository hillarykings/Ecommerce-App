import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const Config = {
    apiKey: "AIzaSyAVSAC_6j_jAAfVn6skn5WH7B0B7CMV8XM",
    authDomain: "crown-db-5865b.firebaseapp.com",
    databaseURL: "https://crown-db-5865b.firebaseio.com",
    projectId: "crown-db-5865b",
    storageBucket: "crown-db-5865b.appspot.com",
    messagingSenderId: "383742301461",
    appId: "1:383742301461:web:96233a813bc4ed14ec851c"
  };


  firebase.initializeApp(Config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;