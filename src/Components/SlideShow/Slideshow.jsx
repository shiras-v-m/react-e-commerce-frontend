import React from 'react'
import './Slideshow.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import amazonBanner from '../../assets/amazon-ads-banner.png'
function Slideshow() {
    return(
       <div className='slideshow'>
            <Carousel swipeable={true} showArrows={false} infiniteLoop showStatus={false} autoPlay renderThumbs={()=>{}}>
            <div>
                <img alt="Banner" src={amazonBanner} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="Banner" src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" />
                <p className="legend">Legend 13</p>
            </div>
            <div>
                <img alt="Banner" src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" />
                <p className="legend">Legend 14</p>
            </div>
        </Carousel>
       </div>
    )
}

export default Slideshow