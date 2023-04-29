import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Config/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () =>{
        setLoader(true);
        signOut(auth)
        .then(() => {
            console.log("Log out successful")
        })
        .catch(error =>{
            console.log("Error: ", error);
        })
    }

    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, loggedUser =>{
            // console.log(loggedUser);
            setUser(loggedUser);
            setLoader(false);
        })

        return () =>{
            unsubscribed();
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logoutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;