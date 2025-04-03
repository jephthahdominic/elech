import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const auth = getAuth()

export default function ProtectedRoutes({children}) {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                // navigate('/login')
                return <Navigate replace to='/login'/>
            }
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [navigate])

    if(user){
        return (
            <>
                {children}
            </>
        )
    }
}
