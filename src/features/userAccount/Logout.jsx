import { useEffect } from "react"
import { logoutController } from "../../services/Authentication"
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate()
    useEffect(()=>{
        async function logout(){
          await logoutController();
          navigate('/login');
        }
        logout();
    }, [navigate])
  return (
    <div>Please wait.....</div>
  )
}
