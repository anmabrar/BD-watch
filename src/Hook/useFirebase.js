import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Page/Login/Firebase/firebase.init"
import {GoogleAuthProvider,getIdToken, updateProfile, signOut,signInWithEmailAndPassword, onAuthStateChanged,createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth'

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('');
  
  const auth = getAuth();
  const googleProvider  = new GoogleAuthProvider();


    // sign in with google 
    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setLoading(false));
    }

  // user registration 
  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            // save user to the database
             saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setLoading(false));
}

const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
}



  const logOut = () => {
    setLoading(true);
    signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setLoading(false))
}

 // observer user state
 useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
        } else {
            setUser({})
        }
        setLoading(false);
    });
    return () => unsubscribed;
}, [auth])

useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user.email])

const saveUser = (email, displayName,method ) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}




    return {user,
        loading,
        token,
        registerUser,
        loginUser,
        setError,
        error,
        logOut,
        admin,
        setUser,
        authError,
        signInWithGoogle}
    
};

export default useFirebase;