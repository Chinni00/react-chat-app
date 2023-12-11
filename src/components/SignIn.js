




//import firebase from 'firebase/app'; //older version
import firebase from 'firebase/compat/app'; //v9

//to use auth
//import 'firebase/auth'; //older version
import 'firebase/compat/auth'; //v9

//to use firestore
//import 'firebase/firestore'; //Older Version
import 'firebase/compat/firestore'; //v9
import 'firebase/analytics';



firebase.initializeApp({
  // your config
  apiKey: "AIzaSyC8v8OZBxl6PqJ5Jn9v9OIe9lrVWIlGqGc",
  authDomain: "chat-app-5b86e.firebaseapp.com",
  projectId: "chat-app-5b86e",
  databaseURL:"https:/chat-app-5b86e.firebaseio.com",
  storageBucket: "chat-app-5b86e.appspot.com",
  messagingSenderId: "985385750666",
  appId: "1:985385750666:web:5f06f02cb14da83f98dd73",
  measurementId: "G-43N106JQWG"
})

const auth = firebase.auth();



function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p className="warn-msg">Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
  
  }
  export default SignIn;