
import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
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

    // ==================email=======================
 
  const [name, setName]=useState('');
  const [number, setNumber]=useState([]);
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [error,setError]=useState('');
  const [isLogin,setIsLogin]=useState(false);

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

// ==================================

       
// EmailSigning function
// ------------name and phone number------------
const setUserName=()=>{
    updateProfile(auth.currentUser,{displayName:name,phoneNumber:number})
    .then(result => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
}
const setPhoneNumber=()=>{
    updateProfile(user.auth.currentUser,{phoneNumber:number})
    .then(result => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
}
// ------------------------

const handelRegisterSubmit=e=>{
    e.preventDefault();
    if(password.length < 6){
        setError('password should 6 number')
        return;
    }

    createUserWithEmailAndPassword(auth, email, password,)
    .then(result=>{
        const user=result.user;
        // const userAuth=result.user.auth;
        
        setError('');
        setUserName();
        setPhoneNumber();
       
        console.log("bbbbbb=user",user);
        const user1=user.auth.currentUser;
        const user2=user.metadata;
        const babu={babu1:user1,babu2:user2};

       
        // ==============================
        // send data in Database
        
        //==============================
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
            'content-type': 'application/json' 
            },
        
            body:JSON.stringify(babu)
            
        })
        .then()
        // ==============================
    })
    .catch(error=>{
        setError(error.message)
    })
    
    
    


}
// 01
const handelNameField=e=>{
    setName( e.target.value); 
}
// 02
const handleNumberField=e=>{
    setNumber( e.target.value); 
}
// 03
const handelEmailField=e=>{
    setEmail( e.target.value); 
}
// 04
const handelPasswordField=e=>{  
    setPassword( e.target.value); 
 
}

    // ==================================
    // ---------------logIn--------------
const LogIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(result=> {
      // Signed in 
      const user = result.user;
      console.log(user);
      

      // ...
    })
    .catch(error=>{
        setError(error.message)
    })

};
// ==================================

    // signOut method function
    const logOut=()=>{
        signOut(auth)
        .then(() =>{  });
    }
    
    

       
    // return for access another component by context API
    return {
        user,
        LogIn,
        signIngUseIngGoogle,
        logOut,
        // email
        error,
        handelRegisterSubmit,
        handelNameField,
        handleNumberField,
        handelEmailField,
        handelPasswordField,
        
       
     
    }
}
export default useFirebase;