import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyAQ_OmmFd7rpNiP3h-9hbJg4OCmtRfI4PM",
    authDomain: "js-firebase-da216.firebaseapp.com",
    projectId: "js-firebase-da216",
    storageBucket: "js-firebase-da216.appspot.com",
    messagingSenderId: "618826833406",
    appId: "1:618826833406:web:b2821fada03fb390bb34af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let formElement = document.querySelector('#form')
let allOfDataObject = {};

const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach(doc => {
    console.log(doc.id)
    let documentData = doc.data()
    console.log(documentData['productName'])

//   console.log(`${doc.id} => ${doc.data()}`);
});