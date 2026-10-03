"use client"
import { ClientReviews } from '@/data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Reviewcard from './reviewCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

function Slider(){
    return(
        <Carousel
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            pauseOnHover={true}
            infinite
            responsive={responsive}
            containerClass="pb-2"
            itemClass="h-auto flex"
            aria-label="Client reviews carousel"
        >
            {ClientReviews.map((review, i) => (
                <div key={`${review.name}-${i}`} className="h-full">
                    <Reviewcard review={review}/>
                </div>
            ))}
        </Carousel>
    )
}
export default Slider