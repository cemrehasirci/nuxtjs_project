import { defineNuxtPlugin } from 'nuxt/app';
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, Auth} from 'firebase/auth';
import { getFirestore, Firestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
    // Firebase Config için tür tanımlaması
    const firebaseConfig: Record<string, string> = {
        apiKey: "AIzaSyBp0l8ROGAWE_J3OJrM7zY-ql34OWDCNUw",
        authDomain: "nuxtjsprojefinal.firebaseapp.com",
        projectId: "nuxtjsprojefinal",
        storageBucket: "nuxtjsprojefinal.firebasestorage.app",
        messagingSenderId: "656841048680",
        appId: "1:656841048680:web:4a49ddc835b70c741271dd",
        measurementId: "G-Q3JC01BEDV",
    };
    
  // Firebase App Başlatma
  //const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  const auth : Auth = getAuth(app);
  const db: Firestore = getFirestore(app);


  // Auth Modülünü Alma
  //const auth: Auth = getAuth(firebaseApp);

  return {
    provide: {
      firebaseAuth: auth, // Firebase uygulaması
      firebaseDb: db, // Authentication servisi
    },
  };
});
