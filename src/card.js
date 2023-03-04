import logo from './logo.svg';
import Image_Carousel from './Image_Carousel.js';
import Description from './Description.js';
function Card(prop){
    //replace home with heart, put to top right of img
return(
    <div className="card">
         <img src={logo} className="favorite"></img>
        <Image_Carousel/>
        <Description />
    </div>
);
}

export default Card;