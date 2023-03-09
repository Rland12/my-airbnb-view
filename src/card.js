import logo from './logo.svg';
import ImageCarousel from './ImageCarousel.js';
import Description from './Description.js';
function Card(prop){
    //replace home with heart, put to top right of img
return(
    <div className="card">
         <img src={logo} className="favorite"></img>
        <ImageCarousel/>
        <Description />
    </div>
);
}

export default Card;