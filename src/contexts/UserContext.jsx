import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../services/firebaseConfig";

const UserContext = createContext();

function UserProvider({children}){
    const auth = getAuth();
    const [user, setUser] = useState(null);

    
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            const uid = currentUser.uid
            getDoc(doc(firestoreDb, "users", uid))
            .then(result => {
                const userData = result.data();
                setUser({...currentUser, role:userData.role}); 
            })
            .catch(err=>console.log(err))
        })
        return () => unsubscribe()
    }, [auth])

    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

function useUser(){
    const context = useContext(UserContext);
    if (!context){
        console.log("you cannot use context outside its provider");
    }
    return context;
}

export {UserProvider, useUser}