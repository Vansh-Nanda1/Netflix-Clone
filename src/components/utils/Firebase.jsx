// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGILjbMG1Vc8ec45eBAqevVUriW-9Sbmc",
  authDomain: "netflix-gpt-10517.firebaseapp.com",
  projectId: "netflix-gpt-10517",
  storageBucket: "netflix-gpt-10517.appspot.com",
  messagingSenderId: "1070310062083",
  appId: "1:1070310062083:web:9fcb3307410c33d82ef636",
  measurementId: "G-MY1FM592JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);