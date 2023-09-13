import React from 'react';
import './Slideshow.css';
import bannerImaage1 from '../../assets/bannerImage1.png';
import bannerImage2 from '../../assets/bannerImage2.webp'
import bannerImage3 from '../../assets/bannerImage3.webp'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Slideshow() {
    return(
       <div className='slideshow'>
            <Carousel swipeable={true} showArrows={false} infiniteLoop showStatus={false} autoPlay renderThumbs={()=>{}}>
            <div className='slideContainer'>
                <img alt="Banner" src={bannerImaage1} />
                {/* <p className="legend">Shop Now</p> */}
            </div>
            <div className='slideContainer'>
                <img alt="Banner" src={bannerImage2} />
                {/* <p className="legend">Shop Now</p> */}
            </div>
            <div className='slideContainer'>
                <img alt="Banner" src={bannerImage3 } />
                {/* <p className="legend">Shop Now</p> */}
            </div>
        </Carousel>
       </div>
    )
}

export default Slideshow