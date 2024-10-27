import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJPgjhhlGP8seZBcpA7j6Cr_MLV095gjs",
  authDomain: "dojo-manager-958de.firebaseapp.com",
  projectId: "dojo-manager-958de",
  storageBucket: "dojo-manager-958de.appspot.com",
  messagingSenderId: "973593989109",
  appId: "1:973593989109:web:3f8124b9bd5fa7dee39abc",
};

// app
const app = initializeApp(firebaseConfig);

// firestore
export const db = getFirestore(app);

// auth
export const auth = getAuth(app);

// storage
export const storage = getStorage(app);
