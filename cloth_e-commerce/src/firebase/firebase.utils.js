import firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



      const config = {
        apiKey: "AIzaSyCmTt79hvFhjSEqKaHCBKKOEORmL4I7-ZQ",    
        authDomain: "clothing-app-db-b4b1a.firebaseapp.com",
        projectId: "clothing-app-db-b4b1a",
        storageBucket: "clothing-app-db-b4b1a.appspot.com",
        messagingSenderId: "472888065997",   
        appId: "1:472888065997:web:64c1bd142bcfb5dfb5ce84",  
        measurementId: "G-S1H8J921BR" 
      };
      
firebase.initializeApp(config);   

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
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();  
provider.setCustomParameters({ prompt: 'select_account' }); //when pops up always prompts the user to select an account
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;