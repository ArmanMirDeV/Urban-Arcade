import React, { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);


  

  
  const resetPassword = (email) => {    
    sendPasswordResetEmail(auth, email)
  };



// Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    
  }

  


  const logOut = () => {
   return signOut(auth)
}



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, [])
  





  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    resetPassword,
  };





    return <AuthContext value={authData}>
      {children}
  </AuthContext>;
};

export default AuthProvider;
