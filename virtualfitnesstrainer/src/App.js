import React from 'react'
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore'

import { useCollectionState } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAMHQVMCtA5pVOqS0EWGPSmeNMwN4yu-hA",
    authDomain: "virtual-fitness-trainer.firebaseapp.com",
    projectId: "virtual-fitness-trainer",
    storageBucket: "virtual-fitness-trainer.appspot.com",
    messagingSenderId: "559528621216",
    appId: "1:559528621216:web:17f402868d9b817c9845c5",
    measurementId: "G-Z3D207RE86"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
