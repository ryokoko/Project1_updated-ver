import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";


class ImageCarousel extends React.Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src="./Images/serv1.jpg" />
                  <p className="legend">Cath-lab X-ray machine</p>                  
              </div>
              <div>
                  <img src="./Images/serv2.jpg" />
                  <p className="legend">OPG machine</p>
              </div>
              <div>
                  <img src="./Images/serv3.jpg" />
                  <p className="legend">Fully automatic X-ray machine</p>
              </div>
          </Carousel>
      );
  }
};

export default ImageCarousel;
