import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDT3ZAgIdC1LtGxwngxTwLIy2WpFFdBSMc",
    authDomain: "suparth-netflix-clone.firebaseapp.com",
    projectId: "suparth-netflix-clone",
    storageBucket: "suparth-netflix-clone.appspot.com",
    messagingSenderId: "600636487540",
    appId: "1:600636487540:web:0777a575ac0cfb474f9e21"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;