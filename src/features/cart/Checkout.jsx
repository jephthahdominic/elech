import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { usePaystackPayment } from "react-paystack";

export default function Checkout({totalAmount}){
    const {user} = useUser();
    const navigate = useNavigate()

    const config = {
        reference: (new Date()).getTime().toString(),
        email: user.email,
        amount: totalAmount * 100,
        publicKey: "pk_test_554fabc91b95508184b4e3f8b056e177ea6f8c8b"
    }

    function onSuccess(reference){
        console.log(reference)
    }

    function onClose(){
        alert("closed")
    }

    const initializePayment = usePaystackPayment(config)
    
    function checkout(){
        if(!user){
        navigate('/login', {
            replace: true
        })
        return;
        }
        initializePayment(onSuccess, onClose) 
    }

    return (
        <Button className={'bg-primary w-full p-5 text-[1.25rem] rounded-[10px] font-sans font-medium'}
            onClick={()=>checkout()}
        >
        Checkout {formatCurrency(totalAmount)}
        </Button>
    )
}