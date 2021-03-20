import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBrz0e0dsJ7fGhfs52hflAtlbCcoHBIXSc",
    authDomain: "chat-1d576.firebaseapp.com",
    projectId: "chat-1d576",
    storageBucket: "chat-1d576.appspot.com",
    messagingSenderId: "725032072706",
    appId: "1:725032072706:web:7c739161fa6e8f87e0191b"
  };

let app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

db.collection("users").add({
    name: "cerda"
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

