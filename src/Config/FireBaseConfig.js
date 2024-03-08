// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACsdamvj30Oi3G6CYJzXLcuni_ZbRaBgI",
    authDomain: "efurniturestorage.firebaseapp.com",
    projectId: "efurniturestorage",
    storageBucket: "efurniturestorage.appspot.com",
    messagingSenderId: "513514400218",
    appId: "1:513514400218:web:91bf94c3c62f4addce38e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)