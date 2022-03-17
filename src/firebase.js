import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = ({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase(app);
export const storage = getStorage(app);
export const db = getFirestore(app)



// export const upload = async (file, currentUser) => {
//   const fileRef = ref(storage, currentUser.uid + '.png' )
//   const snapshot = await uploadBytes(fileRef, file)

//   const photoURL = await getDownloadURL(fileRef);

//   updateProfile(currentUser, {photoURL})
// }

