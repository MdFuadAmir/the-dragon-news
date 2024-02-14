import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const creatUser = (name, photo, email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,name,photo,email,password); 
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {user,creatUser,logOut,signIn,loading} 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
AuthProvider.propeTypes = {
    children: PropTypes.node
}
