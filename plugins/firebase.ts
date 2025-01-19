import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
import { defineNuxtPlugin, type NuxtApp } from 'nuxt/app';

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
    
    // Firebase Uygulamasını Başlat
    const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(firebaseApp);
    
    // Auth modülünü başlat
    const auth: Auth = getAuth(firebaseApp);
    
    return {
        provide: {
            firebase: firebaseApp,
            auth,
        },
    };
});
