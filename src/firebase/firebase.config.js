import { initializeApp } from "firebase/app";

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

export default app;