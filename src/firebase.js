
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDmuRghCOnLzJ2vSe9TfjvS8smXjvPSPCY",
//     authDomain: "trunk-story-quiz.firebaseapp.com",
//     projectId: "trunk-story-quiz",
//     storageBucket: "trunk-story-quiz.appspot.com",
//     messagingSenderId: "407372512994",
//     appId: "1:407372512994:web:aa745a9c7aee1e0fd068bb",
//     measurementId: "G-1SD93WW9W1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db, collection, addDoc, setDoc, doc };

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaEQzLU7KXfXl116vo-uICs7sThazZ0Mc",
  authDomain: "my-database-88f81.firebaseapp.com",
  projectId: "my-database-88f81",
  storageBucket: "my-database-88f81.appspot.com",
  messagingSenderId: "864072879089",
  appId: "1:864072879089:web:b043db5c6f84af763a1250",
  measurementId: "G-QG35EYKKZ2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, setDoc, doc };
