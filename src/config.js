// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4r9mCJ813hrRyuvvzxDTcX6gRLdoEtBA',
  authDomain: 'ray-d-blog.firebaseapp.com',
  projectId: 'ray-d-blog',
  storageBucket: 'ray-d-blog.appspot.com',
  messagingSenderId: '590347765223',
  appId: '1:590347765223:web:633abb60e68ada3029a942',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'posts');
const auth = getAuth(app);

export {
  colRef,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
  db,
  auth,
};
