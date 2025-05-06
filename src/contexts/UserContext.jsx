import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../services/firebaseConfig";

const UserContext = createContext();

function UserProvider({children}){
    const auth = getAuth();
    const [user, setUser] = useState(null);

    async function getUserFromDb(uid){
        const data = await getDoc(doc(firestoreDb, "users", uid));
        const currUser = data;
        return currUser
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            userRole = getUserFromDb(currentUser.uid)
            if(currentUser){
                setUser({...currentUser.user, role:userRole.role}); 
                console.log(user)
            }
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