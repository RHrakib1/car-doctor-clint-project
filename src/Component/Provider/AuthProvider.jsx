
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


export const contextProvider = createContext()

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loadding, setloadding] = useState(true)

    const signupaccount = (email, password) => {
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginAccount = (email, password) => {
        setloadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            console.log('CURRENT USER ', currentuser);
            setloadding(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])



    const dataShare = {
        user,
        signupaccount,
        loginAccount,

    }
    return (
        <contextProvider.Provider value={dataShare}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;