import React, { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);


  console.log(user);

  




// Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


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
  };





    return <AuthContext value={authData}>
      {children}
  </AuthContext>;
};

export default AuthProvider;
