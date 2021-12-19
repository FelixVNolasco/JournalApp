// import "firebase/firestore";
// import "firebase/auth";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBbqFguM8JZE6fBGJm7qiCPR4bqFl8Xojc",
//   authDomain: "journal-app-c59e4.firebaseapp.com",
//   projectId: "journal-app-c59e4",
//   storageBucket: "journal-app-c59e4.appspot.com",
//   messagingSenderId: "678440234572",
//   appId: "1:678440234572:web:a52c7551f9c3157c028ee9",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
 
// const db = getFirestore(app);
 
// const googleAuthProvider = new GoogleAuthProvider();
 
// export{
//     db,
//     googleAuthProvider
// }



import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbqFguM8JZE6fBGJm7qiCPR4bqFl8Xojc",
  authDomain: "journal-app-c59e4.firebaseapp.com",
  projectId: "journal-app-c59e4",
  storageBucket: "journal-app-c59e4.appspot.com",
  messagingSenderId: "678440234572",
  appId: "1:678440234572:web:a52c7551f9c3157c028ee9",
};
 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
 
export{
  firebaseApp,
  googleAuthProvider,
} ;