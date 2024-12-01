import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from "axios";

export const AuthContext = createContext();
const auth= getAuth(app);

 const AuthProviders = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setloading]= useState(true);
    const createUser= (email, password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email, password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut= ()=>{
        setloading(true);
        return signOut(auth);
    }

    useEffect( ()=>{
      const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email:userEmail};
            setUser(currentUser);
            console.log('current user', currentUser);
            setloading(false);
            // if user axios then issue a token
            if(currentUser){
               
                axios.post('http://localhost:4000/jwt',loggedUser, {withCredentials:true})
                .then(res =>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('http://localhost:4000/logout',loggedUser,{
                    withCredentials: true
                })
                .then(res=>{
                    console.log(res.data)
                })
            }
        });
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={
           user,loading, createUser, signIn,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;