
import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
// =========================================
import { useState } from "react";
import firebaseConfig from "./FirebaseConfig";

// ======================firebase  initialize from apps
initializeApp(firebaseConfig);
// =========================================
const useFirebase =() =>{
    //useState for Stor Signing user Data
    const[user, setUser]=useState({});
    // =================
    const auth = getAuth();


    // GoogleSigning method function
    const signIngUseIngGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     const user= result.user;
        //     // console.log(user);
        //     setUser(result.user);
        // })    

    }

    // useEffect onAuthStateChanged for observation  user state change
    useEffect(()=>{
        // unsubscribed for user  performance 
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({ });
            }
        })
        return()=> unsubscribed;
    },[])

    // signOut method function
    const logOut=()=>{
        signOut(auth)
        .then(() =>{  });
    }
    
    

       
    // return for access another component by context API
    return {
        user,
        signIngUseIngGoogle,
        logOut,
    }
}
export default useFirebase;