import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC3fJy1IAf7_1j45l2UMLsq58_vmlkcRw8",
  authDomain: "mobileexams-rey.firebaseapp.com",
  databaseURL: "https://mobileexams-rey.firebaseio.com",
  projectId: "mobileexams-rey",
  storageBucket: "mobileexams-rey.appspot.com",
  messagingSenderId: "595380913750",
  appId: "1:595380913750:web:a3c0a3cb707ad114"
};

// Initialize Firebase
export const Fire = firebase.initializeApp(firebaseConfig);


 