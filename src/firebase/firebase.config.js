// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDjV-9PgzwuDTtSfliFXtGFlYVMQP65Oc",
    authDomain: "foodzy-client.firebaseapp.com",
    projectId: "foodzy-client",
    storageBucket: "foodzy-client.appspot.com",
    messagingSenderId: "452449759043",
    appId: "1:452449759043:web:4257771f21809e9730c9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app