import { FiUser } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext'

export default function SideBar() {
    const {isSidebarOpen, setIsSidebarOpen} = useSidebar();
    const navigate = useNavigate();
    function navigateToHome(){
        navigate('/');
        setIsSidebarOpen(s => !s)
    }
  return (
    <div className={`w-full h-screen flex justify-end fixed z-40 top-0 bg-[rgba(0,0,0,0.37)] ${!isSidebarOpen && 'hidden'} animate-fade`}>
        <nav className='fixed z-40 bg-white h-full w-[85%] animate-appearRTL'>
            <header className='px-4 py-4 w-full relative border-b-[3px] border-b-[3px solid E5E7EB]'>
                <IoClose className='text-[28px] absolute right-4' onClick={()=>setIsSidebarOpen(s=>!s)}/>
                <div className='mt-10'>
                    <Link to='signin' className='inline-flex items-center gap-2 font-poppins font-normal text-xl'>
                        <FiUser className=' text-2xl'/> Sign in
                    </Link>
                </div>
            </header>
            <div className='px-4 mt-6'>
                <span className='font-sans font-bold text-2xl' onClick={()=>navigateToHome()}>Home</span>
                <h1 className='font-sans font-bold text-2xl mt-4'>Categories</h1>
                <ul className='mt-3 flex flex-col gap-3'>
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
            </div>
        </nav> 
        <div className='fixed w-full h-full bg-inherit' onClick={()=>setIsSidebarOpen(s=>!s)}></div>
    </div>
  )
}