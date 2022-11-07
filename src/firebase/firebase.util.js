import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { signInWithPopup } from 'firebase/auth'

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
firebase.initializeApp(config)

export const auth = firebase.auth() ;
export const firestore = firebase.firestore() ;

const provider = new firebase.auth.GoogleAuthProvider() ;

export const signInWithGoogle = () => signInWithPopup(auth,provider) ;

export default firebase;

