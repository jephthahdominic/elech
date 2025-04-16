import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const sizes  = [
    {
      country: "EU",
      sizes:[38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    },
    {
      country: "UK",
      sizes:[4, 5, 5.5, 6.5, 7.5, 8, 9, 9.5, 10.5, 11, 13, 14, 15, 16]
    },
    {
      country: "US",
      sizes:[4, 5, 5.5, 6.5, 7.5, 8, 9, 9.5, 10.5, 11, 13, 14, 15, 16]
    }
]

export default function SelectSize({selectedSize, setSelectedSize, isError, setIsError}) {
    const [countrySize, setCountrySize] = useState("EU");
    const [index, setIndex] = useState(0);
    const [changeCountry, setChangeCountry] = useState(false);

    function selectCountry(country, index){
        setIndex(index)
        setCountrySize(country);
        setChangeCountry(s=>!s);
    }
    
  return (
    <section className={`py-5 mt-4 ${isError && 'border-2 border-red-600 px-3 rounded-[10px]'}`} id='selectSize'>
        <div className='flex justify-between items-start relative'>
            <span className='text-[1.5rem] font-montserrat text-[#212121]'>Select Size</span>
            <div className='border absolute right-0 bg-white'>
                <div className='flex py-1 px-2 gap-20 items-center' onClick={()=>setChangeCountry(s=>!s)}>
                    {countrySize} {!changeCountry ? <FiChevronDown /> : <FiChevronUp/> }
                </div>
                <div className= {`flex-col ${!changeCountry ? 'hidden' : 'flex'}`}>
                    {
                        sizes.map((size, index)=>(
                            <div className={`border-t py-1.5 px-2 w-full ${size.country === countrySize && 'bg-slate-200'}`} onClick={()=>selectCountry(size.country, index)} 
                            key={index}>{size.country}</div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-4'>
            {
                sizes[index].sizes.map((size, id)=>(
                    <div className='' key={id}>
                        <label htmlFor="size" className={`${selectedSize === size && 'bg-primary text-[#f8f8f8]'} text-[#666666] border-2 border-light-gray shadow-sm shadow-light-gray rounded-full flex justify-center p-2`} 
                        onClick={()=>{
                            setSelectedSize(size);
                            setIsError(false)
                        }}> {size}</label>
                        <input type="radio" name="size" id="size" className='hidden' value={size} />
                    </div>
                ))
            }
        </div>
    </section>
  )
}
