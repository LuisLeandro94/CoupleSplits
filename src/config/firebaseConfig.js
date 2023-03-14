import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyC044H2WwijBd9HseLwluqn8_9aU8DyIIg',
	authDomain: 'couple-splits.firebaseapp.com',
	projectId: 'couple-splits',
	storageBucket: 'couple-splits.appspot.com',
	messagingSenderId: '1044780738754',
	appId: '1:1044780738754:web:327100f0f3ef9708e2735b',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(app);

export { auth };
