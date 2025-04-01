import { useEffect } from "react";

export default function Error() {
  return (
    <div>Error</div>
  )
}

export function ErrorMessage({errorMessage, setAuthError, setAuthErrorMessage}){
  
  useEffect(()=>{
    const id = setTimeout(() => {
      setAuthError(false);
      setAuthErrorMessage("")
    }, 3500);
    
    ()=>clearTimeout(id);
  }, [setAuthError, setAuthErrorMessage])

  return(
    <div className="w-screen flex align-center absolute top-0 left-0 mt-4">
      <p className="text-[1.3rem] px-5 py-2 w-max m-auto text-center text-white bg-red-500 rounded-md shadow-md animate-fade">{errorMessage}</p>
    </div>
  )
}
