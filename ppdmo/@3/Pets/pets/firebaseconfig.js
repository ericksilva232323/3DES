import { inicializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCHM_20VLoRldkin3cSRmyjjq-4ftsZPs8",
    authDomain: "pets-689f2.firebaseapp.com",
    projectId: "pets-689f2",
    storageBucket: "pets-689f2.appspot.com",
    messagingSenderId: "313132279920",
    appId: "1:313132279920:web:de70d899fb42554dc06cb5",
    measurementId: "G-YW0ZSBW2MT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore(app);

  const auth = getAuth(app);

  export { db, auth };
