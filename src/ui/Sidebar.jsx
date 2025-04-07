import { FiUser } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext'
import { useUser } from '../contexts/UserContext';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineCustomerService } from 'react-icons/ai';

export default function SideBar() {
    const {isSidebarOpen, setIsSidebarOpen} = useSidebar();
    const {user} = useUser();

    const navigate = useNavigate()

    console.log(user);

    async function logout(){
        navigate('/logout')
    }
    
  return (
    <div className={`w-full h-screen flex justify-end fixed z-40 top-0 bg-[rgba(0,0,0,0.37)] ${!isSidebarOpen && 'hidden'} animate-fade`}>
        <nav className='fixed z-40 bg-white h-full w-[85%] animate-appearRTL'>
            <header className='px-4 py-4 w-full relative border-b-[3px] border-b-[3px solid E5E7EB]'>
                <IoClose className='text-[28px] absolute right-4' onClick={()=>setIsSidebarOpen(s=>!s)}/>
                <div className='mt-10'>
                    {user === null ? <Link to='login' className='inline-flex items-center gap-2 font-poppins font-normal text-xl'>
                        <FiUser className=' text-2xl'/> Sign in
                    </Link> : <h2 className='font-sans font-normal text-[1.5rem]'>Hi, {user?.displayName.split(" ")[0]}</h2>}
                </div>
            </header>
            <div className='px-4 mt-6 relative'>
                <p className='font-sans text-[1.5rem] mt-4 flex items-center gap-2'> Explore products</p>
                <ul className='mt-4 pl-3 flex flex-col gap-3'>
                    <li className='py-1'>
                        <Link className='w-full font-poppins font-light text-xl'>Corporate shoes</Link>
                    </li>
                    <li className='py-1'>
                        <Link className='font-poppins font-light text-xl'>Sandals</Link>
                    </li>
                    <li className='py-1'>
                        <Link className='font-poppins font-light text-xl'>Belts</Link>
                    </li>
                </ul>
                <div className='mt-6'>
                    <p className='font-sans text-[1.5rem] mt-4 flex items-center gap-2'>My orders</p>
                </div>
            </div>
            <div className='absolute bottom-0 z-10 w-full p-4 flex flex-col gap-5 '>
                <div className='flex items-center gap-3 text-2xl font-medium text-black rounded-md p-5 bg-white'>
                    <AiOutlineCustomerService className=' text-3xl'/> Customer support
                </div>
                {user !== null && <div className='flex items-center gap-3 text-2xl font-medium text-[red] rounded-md p-5' onClick={()=>logout()}>
                    <BiLogOut className='text-3xl'/> Log out
                </div>}
            </div>
        </nav> 
        <div className='fixed w-full h-full bg-inherit' onClick={()=>setIsSidebarOpen(s=>!s)}></div>
    </div>
  )
}