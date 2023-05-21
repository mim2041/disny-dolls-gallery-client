import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const socialLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }

    const PasswordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
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
        updateUserProfile,
        socialLogIn,
        logOut,
        PasswordReset
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;