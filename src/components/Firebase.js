
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARCDioDDdmPRzwLp37ZenNIDD5gVznUF4",
  authDomain: "portfolio-45b5f.firebaseapp.com",
  projectId: "portfolio-45b5f",
  storageBucket: "portfolio-45b5f.appspot.com",
  messagingSenderId: "215135895276",
  appId: "1:215135895276:web:5bf005f93e8f749d28efc9",
  measurementId: "G-6NVD57PNW6",
  databaseURL:"https://portfolio-45b5f-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);