import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCdymM-YULT1Rqv6VlUcTpYYY4dewFI_58",
  authDomain: "biblioteca2-b467e.firebaseapp.com",
  projectId: "biblioteca2-b467e",
  storageBucket: "biblioteca2-b467e.appspot.com",
  messagingSenderId: "270487684838",
  appId: "1:270487684838:web:204330632c7e6e4aff9d27",
  measurementId: "G-Q01KBX5D6L"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
