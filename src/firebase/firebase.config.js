// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALtR2T4nIEW-4g1bDkyNxB0jHpvfbSYZw",
  authDomain: "assinment-10-fontent.firebaseapp.com",
  projectId: "assinment-10-fontent",
  storageBucket: "assinment-10-fontent.firebasestorage.app",
  messagingSenderId: "1019927407858",
  appId: "1:1019927407858:web:01b1e5e8d39cfc1404f46b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
export default app;
