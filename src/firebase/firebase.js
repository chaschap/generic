// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
//create firestore database from the console then to docs, build, cloud Firestore, get started
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAEVN1b9LYDhw80F59u42RFYdn7Its4lAk",
	authDomain: "generic-29cb0.firebaseapp.com",
	projectId: "generic-29cb0",
	storageBucket: "generic-29cb0.appspot.com",
	messagingSenderId: "657300989688",
	appId: "1:657300989688:web:afba761bea4784635e3d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export {
	db
}