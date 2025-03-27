import { useProducts } from '../contexts/ProductContext'
import { Link } from 'react-router-dom'
import BigProductCard from './BigProductCard'

export default function Categories() {
    const {shoes} = useProducts();
    // const [showLeftScrollButton, setShowLeftScrollButton] = useState(false);
    // const [showRightButton, setShowRightButton] = useState(true);

    // let scrollInterval;
    
    // function handleRightScroll(){
    //     const containerToScroll = document.getElementById('categoryBar');
    //     const scrollLeft = containerToScroll.scrollLeft;
    //     const clientWidth = containerToScroll.clientWidth;
    //     const scrollWidth = containerToScroll.scrollWidth;

    //     containerToScroll.scrollBy({
    //         left: 100,
    //         behavior:"smooth"
    //     });

    //     setShowLeftScrollButton(true)

    //     if(scrollLeft+clientWidth >= scrollWidth) {
    //         setShowRightButton(false);
    //     };   
    // }

    // function handleLeftScroll(){
    //     const containerToScroll = document.getElementById('categoryBar');
    //     const scrollLeft = containerToScroll.scrollLeft;

    //     containerToScroll.scrollBy({
    //         left: -100,
    //         behavior:"smooth"
    //     })

    //     setShowRightButton(true)

    //     if(scrollLeft === 0) {
    //         setShowLeftScrollButton(false)
    //     }; 
    // }

  return (
    <>
        <section className='mt-10 px-3'>
            <h2 className='font-playfair text-[1.75rem] text-[#212121] font-semibold'>Top Orders</h2>
            <div className='relative flex items-center'>
                {/* <div className={`h-full px-1 absolute left-0 flex items-center`}>
                    <button className='bg-white-400 rounded-full p-4' onClick={()=>handleLeftScroll()}>
                        <FaChevronLeft />
                    </button>
                </div> */}
                {/* <div className={`h-full px-1 absolute right-0 flex items-center`}>
                    <button className='bg-white-400 rounded-full p-4' onClick={()=>handleRightScroll()}>
                        <FaChevronRight />
                    </button>
                </div> */}
                <div className='w-full flex items-center gap-4 mt-3 pr-3 overflow-auto scrollbar-hide' id='categoryBar'>
                    {
                        shoes.map((shoe, key)=>(
                            <BigProductCard key={key} shoe={shoe}/>
                        ))
                    }
                </div>
            </div>
        </section>
        <section className='mt-14 px-3'>
            <div className='flex justify-between items-center px-1'>
                <h2 className='font-playfair text-[1.75rem] text-[#212121] font-semibold'>Coporate shoes</h2>
                <Link className='text-[1.125rem] text-darkTransparent'>Explore</Link>
            </div>
            <div className='w-full flex items-center gap-4 mt-3 overflow-auto scrollbar-hide'>
                {
                    shoes.map((shoe, key)=>(
                        <BigProductCard key={key} shoe={shoe}/>
                    ))
                }
            </div>
        </section>
        <section className='mt-14 px-3'>
            <div className='flex justify-between items-center px-1'>
                <h2 className='font-playfair text-[1.75rem] text-[#212121] font-semibold'>Sandals</h2>
                <Link className='text-[1.125rem] text-darkTransparent'>Explore</Link>
            </div>
            <div className='w-full flex items-center gap-4 mt-3 overflow-auto scrollbar-hide'>
                {
                    shoes.map((shoe, key)=>(
                        <BigProductCard key={key} shoe={shoe}/>
                    ))
                }
            </div>
        </section>
    </>
  )
}
