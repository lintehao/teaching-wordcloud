import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTEt_WGvQ9DR4wH7L1YFPWZ3wjqVCNP-E",
  authDomain: "the-first-e154a.firebaseapp.com",
  projectId: "the-first-e154a",
  storageBucket: "the-first-e154a.firebasestorage.app",
  messagingSenderId: "701507556269",
  appId: "1:701507556269:web:9d67963fc4be56c7d48724"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
