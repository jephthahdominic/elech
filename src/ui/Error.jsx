import { getErrorMessages } from "../services/LoginAndSignup"

export default function Error() {
  return (
    <div>Error</div>
  )
}

export function ErrorMessage({errorMessage}){
  return(
    <div className="w-max m-auto absolute top-0 ">
      <p className="text-[1.3rem] px-5 py-2 text-center text-white">{errorMessage}</p>
    </div>
  )
}
