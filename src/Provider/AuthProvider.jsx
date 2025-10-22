import React, { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider,  onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
const [loading , setLoading] = useState(true)

   const googleProvider = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  
  const resetPassword = (email) => {    
    sendPasswordResetEmail(auth, email)
  };



// Create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    
  }

  

  


  const logOut = () => {
   return signOut(auth)
}



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    loading,
    setLoading,
    handleGoogle,
  };





    return <AuthContext value={authData}>
      {children}
  </AuthContext>;
};

export default AuthProvider;
