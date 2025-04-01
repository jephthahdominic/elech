import { GrStatusGood } from "react-icons/gr";
import Header from "../../ui/Header";
import { Link, useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  return (
    <div>
      <Header />
      <div className="text-center py-20 px-3">
        <div className="w-max relative flex items-center justify-center m-auto">
          <div className="w-[120px] h-[80px] bg-light-gray border border-dark-gray"></div>
          <div className="absolute top-0 left-0 w-[100%] h-[40px] bg-light-gray border border-dark-gray rounded-b-[20px] animate-flapOpen" style={{transformOrigin:'top'}}></div>
          <div className="absolute text-[100px] bottom-0 opacity-0 animate-slideOut">📄</div>
        </div>
        <p className="text-[1.3rem] mt-3">Please check your inbox and click on the link to verify your email.</p>
        <p className="text-[1rem] text-[#212121] mt-3">If you don&apos;t see the email, please check your spam folder.</p>
        <p className="text-[1rem] text-[#212121]">If you still don&apos;t see it, please try again.</p>
      </div>
    </div>
  )
}

export function VerificationSuccess(){
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/cart')
  }, 3000);
  return(
    <div className="h-screen">
      <Header />
      <div className="text-center py-20 px-3 flex flex-col items-center">
        <GrStatusGood className="text-green-500 text-[100px]"/>
        <p className="text-[1.3rem] mt-3">You have successfully verified your Email</p>
        <Link className="text-[1.125rem] text-blue-700 mt-3" to={'/cart'}>Confirm</Link>
      </div>
    </div>
  )
}
