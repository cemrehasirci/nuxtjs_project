import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyBp0l8ROGAWE_J3OJrM7zY-ql34OWDCNUw",
        authDomain: "nuxtjsprojefinal.firebaseapp.com",
        projectId: "nuxtjsprojefinal",
        storageBucket: "nuxtjsprojefinal.firebasestorage.app",
        messagingSenderId: "656841048680",
        appId: "1:656841048680:web:4a49ddc835b70c741271dd",
        measurementId: "G-Q3JC01BEDV"
}


    const firebaseApp = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);

    return {
        provide: {
          firebase: firebaseApp,
        },
    };
});