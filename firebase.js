// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// Other libraries might need to also be prefixed with "compat":


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUrDH7cpE1eZmhO6iInEllV2ZKI8jr7FU",
  authDomain: "loginapp-94e07.firebaseapp.com",
  projectId: "loginapp-94e07",
  storageBucket: "loginapp-94e07.appspot.com",
  messagingSenderId: "108171782714",
  appId: "1:108171782714:web:ec8df5bfe7dd810ce06303"
};

// Initialize Firebase



// Then you can then use the old interface, with version 9:
if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}


 const auth =firebase.auth()

 export{auth};