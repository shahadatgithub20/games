// ============ FirebaseAuthentication page number 05 ============================
// =========================================

import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

   // From Relative path ( import from AuthProvider)
   const useAuth=()=>{
     // (useContext) import from react and (AuthContext) Relative path  for access Firebase  from every component as a props value
       return useContext(AuthContext);
       
    }
export default useAuth;

