import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { signInWithPopup } from 'firebase/auth'
import { async } from '@firebase/util'

import { collection , addDoc , setDoc , doc } from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB__ZHT0SYUCc46ofP2d2wtl8geRrub4Lk",
  authDomain: "test-firebase-eb00f.firebaseapp.com",
  projectId: "test-firebase-eb00f",
  storageBucket: "test-firebase-eb00f.appspot.com",
  messagingSenderId: "897145163872",
  appId: "1:897145163872:web:153dd71664d430fe93f305",
  measurementId: "G-B8X11YR5NV"
}

// register app with firebase

firebase.initializeApp(config);
export const auth = firebase.auth() ;
export const db = firebase.firestore() ;

export const handleAddUserToDB = async ( userAuth ) => {
  try {

    const idUser = userAuth.uid ;
    const { displayName , email } = userAuth ;
    const createAt = new Date() ;

    const docRef = await setDoc(doc(db, "users",idUser), {
      name : displayName ,
      email,
      createAt,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const provider = new firebase.auth.GoogleAuthProvider() ;

export const signInWithGoogle = () => signInWithPopup(auth,provider) ;

export default firebase;

