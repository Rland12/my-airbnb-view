import logo from './logo.svg';
import Image from './image.js';
import Description from './description.js';
function Card(prop){
    //replace home with heart, put to top right of img
return(
    <div className="card">
         <img src={logo} className="favorite"></img>
        <Image/>
        <Description />
       

    </div>
);
}

export default Card;