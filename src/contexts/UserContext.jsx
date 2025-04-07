import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({children}){
    const auth = getAuth();
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser);
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