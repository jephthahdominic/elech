import loaderImg from '../assets/images/logo-loader.png'

export default function Loader() {
  return (
    <div className="h-full w-full flex items-center justify-center relative bg-red-500">
      {/* <div className='w-[60px] h-[60px] border-2 border-spacing-6 border-black p-3 rounded-full animate-spin absolute top-[300px]'>

      </div> */}
      <img src={loaderImg} alt="logo" width={50} className='animate-fade'/>

    </div>
  )
}
