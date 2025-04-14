import loaderImg from '../assets/images/logo-loader.png'

export default function Loader() {
  return (
    <div className="flex-1 w-full flex items-center justify-center">
      {/* <div className='w-[60px] h-[60px] border-2 border-spacing-6 border-black p-3 rounded-full animate-spin absolute top-[300px]'>

      </div> */}
      <img src={loaderImg} alt="logo" width={50} className='animate-loading m-auto'/>

    </div>
  )
}
