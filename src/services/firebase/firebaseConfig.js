
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCN0YND_x4QU3AeBoBLqAH2oA35BJQq4EE",
    authDomain: "proyectofinal-b60da.firebaseapp.com",
    projectId: "proyectofinal-b60da",
    storageBucket: "proyectofinal-b60da.appspot.com",
    messagingSenderId: "877222587970",
    appId: "1:877222587970:web:de32d97c8a24ef686207db",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);