import { IoStar, IoStarOutline } from "react-icons/io5";

export function calculateAvgRating(reviews){
    let ratings = [];
    reviews?.forEach(review => {
        ratings.push(review.rating)
    });
    let totalRatings = ratings.reduce((sum, current) => sum + current, 0);
    const averageRating = Math.round(totalRatings/ratings.length) + '.0';
    
    return averageRating
}

export function StarRating({rating}){

    return (
        <div className='flex gap-1 items-center'> 
            {Array.from({length: 5}, (_, i) => (
                <span key={i}>
                {i < rating ? 
                    <IoStar className='text-primary text-[1.125rem]'/> : 
                    <IoStarOutline className='text-primary text-[1.125rem]'/>
                }
                </span>
            ))} 
        </div>
    )
}