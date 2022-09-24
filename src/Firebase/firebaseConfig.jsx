// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDx08XcQNf5dUcjS6egtSw2CXw6NnRI44U",
  authDomain: "consentir-ecommerce.firebaseapp.com",
  projectId: "consentir-ecommerce",
  storageBucket: "consentir-ecommerce.appspot.com",
  messagingSenderId: "1022637882362",
  appId: "1:1022637882362:web:fd6fd916af7dd9a4bc4243",
  measurementId: "G-B4MQ0CLESC"
};

//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;