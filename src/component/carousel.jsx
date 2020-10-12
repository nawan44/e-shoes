import React from 'react';
import './css/carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Carousely extends React.Component{
render(){
    return(
        <div>
        <h2>My Image Gallery</h2>
        <Carousel autoPlay interval="1500" transitionTime="1000" >
         
        </Carousel>
    </div>
    );
}

}
export default Carousely;