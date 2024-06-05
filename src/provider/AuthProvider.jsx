
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            // // get and set token
            // if (currentUser) {
            //     axios.post('https://pro-drawing-server.vercel.app/jwt', { email: currentUser.email })
            //         .then(data => {
            //             localStorage.setItem('access-token', data.data.token)
            //             setLoading(false)
            //         })
            // }
            // else {
            //     localStorage.removeItem('access-token')
            // }


        })
        return () => {
            return unsubscribe()
        }
    }, [user])
    const userInfo = {
        auth,
        user,
        loading,
        error,
        setError,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;