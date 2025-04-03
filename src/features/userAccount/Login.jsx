import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../ui/Header";
import { ErrorMessage } from "../../ui/Error";
import Button from "../../ui/Button";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { validateEmail, validateFullName, validatePassword } from "../../utils/helpers";


export default function Login() {

    const auth = getAuth();
  
    const [formData, setFormData] = useState({email:"", password:""})
    const [error, setError] = useState({email:"", password:""})
    const [authError, setAuthError] = useState(false);
    const [authErrorMessage, setAuthErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
  
    const navigate = useNavigate()
    
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
      e.preventDefault();
      setIsLoading(true);
      
      if(formData.email.length === 0 || formData.password.length === 0) {
        setAuthError(true);
        setAuthErrorMessage("All fields must be filled");
        setIsLoading(false)
        return;
      }

      try{
        const loginUser = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const user = loginUser.user;
        console.log(user);

        if(user){
          setAuthError(false);
          setIsLoading(false);
          navigate('/');
        }

      }catch(err){
        setAuthError(true);
        setAuthErrorMessage(err.code);
        setIsLoading(false);
      }
    }

  return (
    <div className="h-screen">
      <Header />
      <div className="w-full py-20 px-5 relative">
        {authError && <ErrorMessage errorMessage = {authErrorMessage} setAuthError = {setAuthError} setAuthErrorMessage={setAuthErrorMessage}/>}
        <h1 className="text-[#212121] text-[1.75rem] font-playfair font-semibold">Sign up to continue shopping</h1>
        <form className="mt-4 flex flex-col items-center gap-5" onSubmit={((e)=>handleSubmit(e))}>

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="text-[1.3rem] font-playfair text-[#212121]">Email address</label>
          <input type="text" name="email" className={`p-3 rounded-[10px] border outline-none ${error.email.length > 0 && 'border-red-500'}`} onChange={(e)=> handleInput(e)} required/>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="password" className="text-[1.3rem] font-playfair text-[#212121] focus:border-none focus:outline-blue-400">Password</label>
          <div className='relative'>
            <input type={!showPassword ? "password" : "text"} name="password" className={`w-full p-3 rounded-[10px] border outline-none ${error.password.length > 0 && 'border-red-500'}`} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}" onChange={(e)=>handleInput(e)} required/>
            <button className='absolute right-3 bottom-3' onClick={(e)=>{e.preventDefault(); setShowPassword(s=>!s)}}>
              {!showPassword ? <BsEye className='text-[1.2rem]'/> : <BsEyeSlash className='text-[1.2rem]'/>}
            </button>
          </div>
        </div>
        <Button
          className={`bg-primary w-full p-3 rounded-[10px] mt-6 text-[1.125rem] font-poppins text-white ${isLoading && ' bg-opacity-[0.6]'}`}
          disabled = {isLoading}
          onClick={(e)=>handleSubmit(e)}
        >
          {isLoading ? "Please wait..." : "Sign in"}
        </Button>
        <p>Don&apos;t have an account yet? <Link to='/signup' className="text-[#1E90FF]">Sign in</Link></p>

        </form>
      </div>
    </div>
  )
}
