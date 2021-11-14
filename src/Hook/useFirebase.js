import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Page/Login/Firebase/firebase.init"
import {GoogleAuthProvider,signOut,onAuthStateChanged, getAuth, signInWithPopup} from 'firebase/auth'

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
    .finally(() => { setLoading(false) });
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setLoading(false))
}

 // observe whether user auth state changed or not
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user);
      }
      else {
          setUser({});
      }
      setLoading(false);
  });
  return () => unsubscribe;
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return {user,
        loading,
        logOut,
        setUser,
        signInWithGoogle}
    
};

export default useFirebase;