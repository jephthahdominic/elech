import { usePaystackPayment } from "react-paystack"
import { useUser } from "../../contexts/UserContext"
import Button from "../../ui/Button";


export default function CreateOrder() {

  const {user} = useUser();

  console.log(user)

  const config = {
    reference: (new Date()).getTime().toString(),
    email: user.email
  }

  return (
    <Button className={'flex-1 h-[56px] bg-primary border border-primary rounded-[10px] text-[1.125rem] font-semibold tracking-wide text-[#f8f8f8]'}
      >
      Order Now
    </Button>
  )
}
