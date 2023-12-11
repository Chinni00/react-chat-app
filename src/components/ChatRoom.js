

import ChatMessage from './ChatMessage';
import React, { useRef, useState } from 'react';


//import firebase from 'firebase/app'; //older version
import firebase from 'firebase/compat/app'; //v9

//to use auth
//import 'firebase/auth'; //older version
import 'firebase/compat/auth'; //v9

//to use firestore
//import 'firebase/firestore'; //Older Version
import 'firebase/compat/firestore'; //v9
import 'firebase/analytics';




import { useCollectionData } from 'react-firebase-hooks/firestore';


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
const firestore = firebase.firestore();





function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt')
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)
  }
  export default ChatRoom;