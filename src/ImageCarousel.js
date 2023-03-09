import { Carousel } from 'react-responsive-carousel';
import {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function ImageCarousel(props){
    
    const state = useState(false);
    const [isHovering, setIsHovering]= state; 
    const carouselProps = {showThumbs:false, showIndicators:false, showArrows:false}
    if(isHovering){
        carouselProps.autoPlay = true;
    }
    return(
        <div className="carousel-wrapper image-container" onMouseEnter={()=>{setIsHovering(true)} } onMouseLeave={()=>{setIsHovering(false)}}>
        <Carousel {...carouselProps}>
            <div>
                <img src="images\home-exterior.jpg" className="location-img" alt="outside of the home"/>
            </div>
            <div>
                <img src="images\bedroom.jpg" className="location-img" alt="bedroom"/>
            </div>
            <div>
                <img src="images\livingroom.jpg" className="location-img" alt="livingroom"/>
            </div>
        </Carousel>
    </div>
        
    );
}

export default ImageCarousel;