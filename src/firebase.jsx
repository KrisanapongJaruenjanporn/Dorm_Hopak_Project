import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseComfig = {
  apiKey: "AIzaSyAnd6Kzwfaq-2BP1Vjb7wim-sxVqQg7__A",
  authDomain: "fir-project-9eb26.firebaseapp.com",
  projectId: "fir-project-9eb26",
  storageBucket: "fir-project-9eb26.appspot.com",
  messagingSenderId: "13071460974",
  appId: "1:13071460974:web:0923a424e65c9cfe95147f",
  measurementId: "G-74JD0S1RW4",
};

const db = firebase.initializeApp(firebaseComfig);
export const auth = db.auth();
export const firestore = db.firestore();
export const storageRef = db.storage();
export const storage = db.storage();

export default db;
