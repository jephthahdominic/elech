import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const auth = getAuth();

function UserProvider({children}){
    const [user, setUser] = useState(null)
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser);
            }
        })
        return () => unsubscribe()
    }, [])

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
    return {context};
}

export {UserProvider, useUser}