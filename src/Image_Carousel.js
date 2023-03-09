import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Image_Carousel(){
    return(
        <div className="carousel-wrapper image-container">
        <Carousel autoPlay>
            <div>
                <img src="images\home-exterior.jpg" className="location-img"/>
            </div>
            <div>
                <img src="images\bedroom.jpg" />
            </div>
            <div>
                <img src="images\livingroom.jpg" />
            </div>
        </Carousel>
    </div>
        
    );
}

export default Image_Carousel;