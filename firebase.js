
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuração do projeto FinanceFlow
const firebaseConfig = {
  apiKey: "AIzaSyAIO4Qo-kuobCIpRh-XTye5Fs_-9uZmzlY",
  authDomain: "financeflow-e0fae.firebaseapp.com",
  projectId: "financeflow-e0fae",
  storageBucket: "financeflow-e0fae.firebasestorage.app",
  messagingSenderId: "970984329138",
  appId: "1:970984329138:web:429a185b8bab1971991eab"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os módulos para uso no login e index
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
