import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVD5sy18GgZyzpJGB13Dp2vpqTrUMC2SI",
  authDomain: "crm-basic-react-379e0.firebaseapp.com",
  projectId: "crm-basic-react-379e0",
  storageBucket: "crm-basic-react-379e0.appspot.com",
  messagingSenderId: "378404685307",
  appId: "1:378404685307:web:79b3d7c8754ca32844775e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();

  export default db;