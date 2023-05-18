import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const socialLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    } ,[]);

    const authInfo = {
        user,
        createUser,
        SignIn,
        loading,
        socialLogIn,
        logOut
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;