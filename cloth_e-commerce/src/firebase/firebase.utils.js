import firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
        apiKey: "AIzaSyBPKNmQYpAZTBRTzd3qQCAOQd8Er8jk4ro",
        authDomain: "clothing-db-7e9cf.firebaseapp.com",
        projectId: "clothing-db-7e9cf",
        storageBucket: "clothing-db-7e9cf.appspot.com",
        messagingSenderId: "837332213269",
        appId: "1:837332213269:web:152de4a01efacae7d0b81c",
        measurementId: "G-WQ4HR049CZ"
      };
firebase.initializeApp(config);   

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();  
provider.setCustomParameters({ prompt: 'select_account' }); //when pops up always prompts the user to select an account
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;