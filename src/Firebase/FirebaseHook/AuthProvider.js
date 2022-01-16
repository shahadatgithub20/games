// ============ FirebaseAuthentication page number 04 ============================
// ============= This From FirebaseTools > firebaseSignUp.js =====================
import React, { createContext } from 'react';
import useFirebase from '../FirebaseTools/firebaseSignUp';

// make AuthContext & import from react also export for access another variable
export const AuthContext= createContext();



const AuthProvider = ({children}) => {
    // here {children} props value from use Firebase
    // useFirebase import for all signing method function access
    const allContext= useFirebase();
    // ===================================================================================
    // important any time i will use another database  only change useFirebase() function
    // ===================================================================================
    return (
        <AuthContext.Provider value={allContext}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;