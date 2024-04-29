import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCpO_iHlkc1FdFOXhhjbzEOKJ5wlOB9TGQ",
    authDomain: "eet-website.firebaseapp.com",
    projectId: "eet-website",
    storageBucket: "eet-website.appspot.com",
    messagingSenderId: "217832949611",
    appId: "1:217832949611:web:f8bde9f4e5ab757187ee2e",
    measurementId: "G-BQ274BYZXS"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

