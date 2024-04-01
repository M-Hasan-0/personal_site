import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore, collection, getDocs  } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_2EyWvKJIzwVwDMd7Plua6NecUjE6OYM",
    authDomain: "firestore-tut-1cce3.firebaseapp.com",
    projectId: "firestore-tut-1cce3",
    storageBucket: "firestore-tut-1cce3.appspot.com",
    messagingSenderId: "48343332374",
    appId: "1:48343332374:web:68ba34220173e1e97ae737"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getCities(storage) {
    const citiesCol = collection(db, 'Projects');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

