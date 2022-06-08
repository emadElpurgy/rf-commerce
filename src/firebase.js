import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyD6u0dKiWuLQ6NC0XSxnjYHRHIwdQ7ZZ0U",
    authDomain: "rf-commerce.firebaseapp.com",
    projectId: "rf-commerce",
    storageBucket: "rf-commerce.appspot.com",
    messagingSenderId: "47334759892",
    appId: "1:47334759892:web:20c01ebedd01b0b550ca41"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  const createUser = createUserWithEmailAndPassword;
  export {db , auth , createUser};