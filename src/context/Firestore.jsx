import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5L2AjRt8nufLBy53z2hEVzDOeUXSikK4",
  authDomain: "chatapp-react-a5298.firebaseapp.com",
  projectId: "chatapp-react-a5298",
  storageBucket: "chatapp-react-a5298.appspot.com",
  messagingSenderId: "584394298826",
  appId: "1:584394298826:web:aa469c3a5893d00b4a2b33",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const database = getDatabase(app);
const db = getDatabase(app);

const FirestoreContext = createContext();

const googleLogin = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
};

const signUpUserWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    console.error("Error during sign-up:", error);
  }
};

const writeMessage = (name, message) => {
  set(ref(db, "users/"), {
    username: name,
    message: message,
  });
};

const FirestoreProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [data, setData] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // const fetchMessage = ref(db, "user/");
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   setData(data);
  // });

  return (
    <FirestoreContext.Provider
      value={{
        googleLogin,
        signUpUserWithEmailAndPassword,
        loggedIn,
        writeMessage,
        // fetchMessage,
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirebase = () => useContext(FirestoreContext);

export { FirestoreProvider, FirestoreContext };
