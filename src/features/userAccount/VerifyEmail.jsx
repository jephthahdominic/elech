import { GrStatusGood } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { firestoreDb } from "../../services/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

const auth = getAuth();

const actionCodeSettings = {
  url: 'https://elech.vercel.app/verifyEmail/success',
  handleCodeInApp: true,
};

export default function VerifyEmail() {

  const [currentUserEmail, setCurrentUserEmail] = useState()
  
  const navigate = useNavigate();

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      if(!currentUser.emailVerified) {
        setCurrentUserEmail(currentUser.email);
        sendEmailVerification(currentUser, actionCodeSettings);
      }else{
        navigate('/')
      }
    });

    return ()=> unsubscribe()
    
  }, [navigate]);


  return (
    <div>
      <div className="text-center py-20 px-3">
        <div className="w-max relative flex items-center justify-center m-auto">
          <div className="w-[120px] h-[80px] bg-light-gray border border-dark-gray"></div>
          <div className="absolute top-0 left-0 w-[100%] h-[40px] bg-light-gray border border-dark-gray rounded-b-[20px] animate-flapOpen" style={{transformOrigin:'top'}}></div>
          <div className="absolute text-[100px] bottom-0 opacity-0 animate-slideOut">📄</div>
        </div>
        <p className="text-[1.1rem] mt-5 text-[#212121] leading-relaxed">We sent a link to <span className="italic text-dark-gray">{currentUserEmail} </span>click on the link to verify your email.</p>
      </div>
    </div>
  )
}

export function VerificationSuccess(){
  const navigate = useNavigate()
  useEffect(()=>{
    const {displayName, email, uid} = auth.currentUser;
    const role = email === "elech@admin.com"? "admin":"user";

    async function addUser(){
      const addUserToDb = await setDoc(doc(firestoreDb, "users", uid), {
        email,
        displayName,
        role
      })
      return addUserToDb
    }

    const userAdded = addUser();
    console.log(userAdded)

    // return ()=> unsubscribe()
    
  }, []);
  return(
    <div className="h-screen">
      <div className="text-center py-20 px-3 flex flex-col items-center">
        <GrStatusGood className="text-green-500 text-[100px]"/>
        <p className="text-[1.3rem] mt-3">You have successfully verified your Email</p>
        <Link className="text-[1.125rem] text-blue-700 mt-3" to={'/cart'}>Confirm</Link>
      </div>
    </div>
  )
}
