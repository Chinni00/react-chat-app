
import './App.css';

import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';


//import firebase from 'firebase/app'; //older version
import firebase from 'firebase/compat/app'; //v9

//to use auth
//import 'firebase/auth'; //older version
import 'firebase/compat/auth'; //v9

//to use firestore
//import 'firebase/firestore'; //Older Version
import 'firebase/compat/firestore'; //v9
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';




const auth = firebase.auth();




function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>V Chat</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}









export default App;