import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Header from "../../ui/Header";

export default function Signup() {
  return (
    <div className="h-screen">
      <Header />
      <div className="py-3 px-5 mt-10">
        <h1 className="text-[#212121] text-[1.75rem] font-playfair font-semibold">Sign up</h1>
        <form className="mt-4 flex flex-col items-center gap-5">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="fullname" className="text-[1.125rem] text-[#212121] font-playfair">Full name</label>
            <input type="text" name="fullName" className="p-2 rounded-[10px]" pattern="^[a-zA-Z]+$" required/>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-[1.125rem] font-playfair text-[#212121]">Email address</label>
            <input type="email" name="email" className="p-2 rounded-[10px]" required/>
          </div>
          <div className="w-full flex flex-col gap-1">
              <label htmlFor="password" className="text-[1.125rem] font-playfair text-[#212121] focus:border-none focus:outline-blue-400">Password</label>
              <input type="password" name="password" className="p-2 rounded-[10px]" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}" required/>
          </div>
          <Button className={'bg-primary w-full p-3 rounded-[10px] mt-6 text-[1.125rem] font-poppins text-white'}>Sign up</Button>
          <p>Aleady have an account? <Link to='/signin' className="text-[#1E90FF]">Sign in</Link></p>
        </form>
      </div>
    </div>
  )
}
