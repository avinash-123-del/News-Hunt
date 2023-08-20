'use client'
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSqey4QdFg7gDq2Sy_6dKx3dBsB3qXt_s",
  authDomain: "pintrestclone01.firebaseapp.com",
  projectId: "pintrestclone01",
  storageBucket: "pintrestclone01.appspot.com",
  messagingSenderId: "391683341573",
  appId: "1:391683341573:web:19e05c31b9e76b16f1cb6c",
  measurementId: "G-W81M1YPSG9"
};

const App = () => {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);

    if (isSupported()) {
      const analytics = getAnalytics(app);
    } else {
      console.log("Firebase Analytics is not supported in this environment.");
    }
  }, []);

  const auth = getAuth(app);

  // Rest of your component code here
};

export default App;






