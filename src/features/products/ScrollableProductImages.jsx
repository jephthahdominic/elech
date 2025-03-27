import dummyShoe from '../../assets/images/Shoes-PNG-Image.png'

export default function ScrollableProductImages(images){
    return(
        <div className='w-full bg-light-gray relative rounded-[10px]'>
            <img src={dummyShoe} alt={"Product image"} className='w-full object-contain rounded-[10px]'/>
        </div>
    )
}