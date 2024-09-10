
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmuRghCOnLzJ2vSe9TfjvS8smXjvPSPCY",
    authDomain: "trunk-story-quiz.firebaseapp.com",
    projectId: "trunk-story-quiz",
    storageBucket: "trunk-story-quiz.appspot.com",
    messagingSenderId: "407372512994",
    appId: "1:407372512994:web:aa745a9c7aee1e0fd068bb",
    measurementId: "G-1SD93WW9W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, setDoc, doc };
