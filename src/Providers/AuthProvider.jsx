import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import auth from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  
  const createUser = (email, pass) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const signInUser = (email, pass) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('observing', currentUser);
      setUser(currentUser)
      setLoading(false)
    })
    return ()=> unsubscribe()
  },[])

  const info = {
    loading,
    createUser,
    user,
    signInUser,
    logOut,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
