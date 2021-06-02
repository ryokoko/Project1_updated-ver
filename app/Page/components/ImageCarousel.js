import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";


class ImageCarousel extends React.Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src="../../../Images/serv1.jpg" />
                  <p className="legend">Legend 1</p>                  
              </div>
              <div>
                  <img src="../../../Images/serv2.jpg" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src="../../../Images/serv3.jpg" />
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
      );
  }
};

export default ImageCarousel;
