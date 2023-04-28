import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApIkqznw78gCgFc1Mq1sMNlWRhI3NkqoI",
  authDomain: "twitter-clone-quasar-312d1.firebaseapp.com",
  projectId: "twitter-clone-quasar-312d1",
  storageBucket: "twitter-clone-quasar-312d1.appspot.com",
  messagingSenderId: "661641391595",
  appId: "1:661641391595:web:097c97d8ce3c84ae993dae",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
