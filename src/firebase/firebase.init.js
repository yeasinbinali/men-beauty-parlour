import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu4BWJhk7FpCeneE0GVPPh5eYY4a9ZKic",
  authDomain: "men-beauty-parlour.firebaseapp.com",
  projectId: "men-beauty-parlour",
  storageBucket: "men-beauty-parlour.appspot.com",
  messagingSenderId: "477809547522",
  appId: "1:477809547522:web:d79ea92cc0785456374a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;