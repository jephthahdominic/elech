import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const auth = getAuth()

export default function ProtectedRoutes({children}) {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            if(!currentUser){
                navigate('/login', {replace: true})
            }
            else{
                setUser(currentUser)
            }
        })

        return () => unsubscribe()
    }, [navigate])

    if(user) return <>{children}</>
}
