import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { createUser } from '../../services/LoginAndSignup';

export default function Signup() {

  const [formData, setFormData] = useState({fullName:"", email:"", password:""})
  const [error, setError] = useState({fullName:"", email:"", password:""})
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  function validateFullName(value){
    return /^[A-Za-z\s!@#$%^&*(),.?':;_-]+$/.test(value) ? "":"Your fullName can only be letters"
  }

  function validateEmail(value){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? "" : "invalid email format"

  }

  function validatePassword(value){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(value) ? "" : "Your password must be 8 characters long, it must contain letters, at least a number and a symbol"
  }

  function handleInput(e){
    const {name, value} = e.target;

    setFormData({...formData, [name]:value});
    setError({
      ...error,
      [name]: name === "fullName" ? validateFullName(value) : name ==="email" ? validateEmail(value) : validatePassword(value)
    })
    console.log(error)
  }

  async function handleSubmit(e){
    e.preventDefault()
    const user = await createUser(formData.email, formData.password);
    if(user){
      console.log(user)
    }
  }


  return (
    <div className="h-screen">
      <div className="py-3 px-5 mt-10">
        <h1 className="text-[#212121] text-[1.75rem] font-playfair font-semibold">Sign up to continue shopping</h1>
        <form className="mt-4 flex flex-col items-center gap-5">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="fullname" className="text-[1.125rem] text-[#212121] font-playfair">Full name</label>
            <input type="text" name="fullName" className={`p-2 rounded-[10px] border outline-none ${error.fullName.length > 0 && ' border-red-500'}`} pattern="^[A-Za-z\s!@#$%^&*(),.?&quot;&#39;:;_-]+$" onChange={(e)=>handleInput(e)} required/>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-[1.125rem] font-playfair text-[#212121]">Email address</label>
            <input type="text" name="email" className={`p-2 rounded-[10px] border outline-none ${error.email.length > 0 && 'border-red-500'}`} onChange={(e)=> handleInput(e)} required/>
          </div>
          <div className="w-full flex flex-col gap-1">
              <label htmlFor="password" className="text-[1.125rem] font-playfair text-[#212121] focus:border-none focus:outline-blue-400">Password</label>
              <div className='relative'>
                <input type={!showPassword ? "password" : "text"} name="password" className={`w-full p-2 rounded-[10px] border outline-none ${error.password.length > 0 && 'border-red-500'}`} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}" onChange={(e)=>handleInput(e)} required/>
                <button className='absolute right-3 bottom-3' onClick={(e)=>{e.preventDefault(); setShowPassword(s=>!s)}}>
                  {!showPassword ? <BsEye className='text-[1.2rem]'/> : <BsEyeSlash className='text-[1.2rem]'/>}
                </button>
              </div>
          </div>
          <Button className={'bg-primary w-full p-3 rounded-[10px] mt-6 text-[1.125rem] font-poppins text-white'} onClick={(e)=>handleSubmit(e)}>Sign up</Button>
          <p>Aleady have an account? <Link to='/signin' className="text-[#1E90FF]">Sign in</Link></p>
        </form>
      </div>
    </div>
  )
}
