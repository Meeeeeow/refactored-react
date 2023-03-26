import firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const config ={
    apiKey: "AIzaSyAOMiSOBnTpMTythKFmJjp0o4CiLM689eU",
    authDomain: "authentication-9baf4.firebaseapp.com",
    projectId: "authentication-9baf4",
    storageBucket: "authentication-9baf4.appspot.com",
    messagingSenderId: "394793526237",
    appId: "1:394793526237:web:daa3a53a34d6fae4354c34",
    measurementId: "G-DLCNNYMPGJ"
}
firebase.initializeApp(config);  


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfile = async (userAuth, addtionalData)=>{
    // console.log(userAuth);
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log(userRef); // returns a doc reference
    const snapshot = await userRef.get(); // returns a snapshot
    // console.log(snapshot); 
    if(!snapshot.exists)
    { 
      console.log('creating new user');
      const { displayName , email, photoURL} = userAuth;
      const createdAt = new Date();
  
      try{
        await userRef.set({
          displayName,
          email,
          photoURL,
          createdAt,
          ...addtionalData
        })
        // console.log(userRef);
      }catch(err){
        console.log('Errror in creating user:',err.message);
      }
    }
    // console.log(userRef);
    return userRef;
  }
//google authentication
const provider = new firebase.auth.GoogleAuthProvider();  
provider.setCustomParameters({ prompt: 'select_account' }); //when pops up always prompts the user to select an account
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;