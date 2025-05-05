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

    async function logout(){
        navigate('/logout')
    }
    
  return (
    <div className={`max-lg:w-full lg:min-w-[20%] h-screen lg:top-0 lg:py-12 flex max-xl:justify-end fixed lg:left-3 max-lg:z-40 max-lg:top-0 left-0 lg:bg-transparent 
    bg-[rgba(0,0,0,0.37)] max-lg:shadow shadow-[30px 0 25px 20px rgb(0 0 0 / 0.1)] ${!isSidebarOpen && 'max-lg:hidden'} animate-fade`}>
        <nav className='max-lg:fixed lg:top-9 lg:relative lg:flex lg:flex-col lg:justify-between lg:gap-10 max-xl:z-40 bg-white max-h-full overflow-auto xl:rounded-[10px] max-lg:w-[85%] xl:w-full animate-appearRTL'>
            <header className='px-4 py-4 w-full relative border-b-[3px] lg:hidden'>
                <IoClose className='text-[28px] absolute right-4 lg:hidden' onClick={()=>setIsSidebarOpen(s=>!s)}/>
                <div className='mt-10'>
                    {user === null ? <Link to='login' className='inline-flex items-center gap-2 font-poppins font-normal text-xl'>
                        <FiUser className=' text-2xl'/> Sign in
                    </Link> : <h2 className='font-sans font-normal text-[1.5rem]'>Hi, {user?.displayName.split(" ")[0]}</h2>}
                </div>
            </header>
            <div className='px-4 relative pb-5'>
                <p className='font-sans text-[1.25rem] mt-4 flex items-center gap-2'> Explore products</p>
                <ul className='mt-4 pl-3 flex flex-col gap-3'>
                    <li className='py-1'>
                        <Link className='w-full font-poppins font-light text-[1rem]'>Corporate shoes</Link>
                    </li>
                    <li className='py-1'>
                        <Link className='font-poppins font-light text-[1rem]'>Sandals</Link>
                    </li>
                    <li className='py-1'>
                        <Link className='font-poppins font-light text-[1rem]'>Belts</Link>
                    </li>
                </ul>
                <div className='mt-10 cursor-pointer'>
                    <p className='font-sans text-[1.25rem] mt-4 flex items-center gap-2 border-l-2 border-primary pl-3'>My orders</p>
                </div>
                <div className='mt-10 cursor-pointer'>
                    <p className='font-sans text-[1.25rem] mt-4 flex items-center gap-2 border-l-2 border-primary pl-3'>Request a custom shoe</p>
                </div>
                <div className='w-full flex flex-col gap-3 mt-10'>
                    <div className='flex items-center gap-2 text-[1.25rem] font-regular text-black border-l-2 border-l-primary pl-3 cursor-pointer'>
                        <AiOutlineCustomerService className=' text-[1.5rem]'/> Customer support
                    </div>
                    {user !== null && <div className='flex items-center gap-2 text-{1.25rem} mt-10 font-medium text-red-500 bg-white cursor-pointer' onClick={()=>logout()}>
                        <BiLogOut className='text-[1.5rem]'/> Log out
                    </div>}
                </div>
            </div>
        </nav> 
        <div className='fixed w-full h-full bg-inherit lg:hidden' onClick={()=>setIsSidebarOpen(s=>!s)}></div>
    </div>
  )
}