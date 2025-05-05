import { useEffect, useState } from 'react'
import elech from '../assets/images/Elech.jpg'
import promotion2 from '../assets/images/promotion2.jpg'

const promotions = [promotion2, elech]

export default function Banner() {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(()=>{
    const id = setInterval(()=>{
      setCurrentImage(s => (s + 1) % promotions.length);
    }, 5000)

    return ()=> clearInterval(id)
  }, [])


  return (
    <div className={`w-[100%] overflow-auto relative mt-5`}>
      <div style={{transform: `translateX(-${currentImage * 100}%)`}} className={`w-[${promotions.length * 100}%] flex transition-transform duration-[0.5s]`}>
        {promotions.map((promotion, i) => (
          <img key={i} src={promotion} className='min-w-[100%] h-[300px] object-cover rounded-xl'/>
        ))}
      </div>
    </div>
  )
}
