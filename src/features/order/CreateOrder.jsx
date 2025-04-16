import { usePaystackPayment } from "react-paystack"
import { useUser } from "../../contexts/UserContext"
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";


export default function CreateOrder({amount, selectedSize, setIsError}) {

  const navigate = useNavigate()
  const {user} = useUser();

  const config = {
    reference: (new Date()).getTime().toString(),
    email: user?.email,
    amount: amount * 100,
    publicKey: "pk_test_554fabc91b95508184b4e3f8b056e177ea6f8c8b"
  }

  function onSuccess(reference){
    console.log(reference)
  }

  function onClose(){
    alert("closed")
  }
  
  const initializePayment = usePaystackPayment(config)
  
  function initiatePayment(){
    if(selectedSize === null){
      setIsError(true);
      return;
    }else{
      if(!user){
        navigate('/login', {
          replace: true
        });
        return;
      }
      
      initializePayment(onSuccess, onClose);
    }
  }


  return (
    <Button className={'flex-1 h-[56px] bg-primary border border-primary rounded-[10px] text-[1.125rem] font-semibold tracking-wide text-[#f8f8f8]'}
      onClick={()=> initiatePayment()}  
    >
      Order Now
    </Button>
  )
}
