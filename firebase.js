// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFSaPoXCiT-ZRMpW82ujL_6guJP9BUeb8",
    authDomain: "jecircle-3cf4d.firebaseapp.com",
    projectId: "jecircle-3cf4d",
    storageBucket: "jecircle-3cf4d.appspot.com",
    messagingSenderId: "349564896200",
    appId: "1:349564896200:web:781550408f3fb06e2636fd",
    measurementId: "G-DGFJB6W6VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);


export { db }
