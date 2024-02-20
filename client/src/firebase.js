// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-fb0a6.firebaseapp.com',
  projectId: 'mern-estate-fb0a6',
  storageBucket: 'mern-estate-fb0a6.appspot.com',
  messagingSenderId: '677823539812',
  appId: '1:677823539812:web:3af1338240a608b69fcd71',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
