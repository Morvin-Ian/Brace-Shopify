import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

    apiKey: "AIzaSyA1JKILQALe7zXUCIDyAnKgPeY-3lJZFzA",
  
    authDomain: "brace-shopify.firebaseapp.com",
  
    projectId: "brace-shopify",
  
    storageBucket: "brace-shopify.appspot.com",
  
    messagingSenderId: "331635089595",
  
    appId: "1:331635089595:web:3f9b140656ae8909b8099e",
  
    measurementId: "G-2500FN5NFE"
  
  };

  // Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app); 
  