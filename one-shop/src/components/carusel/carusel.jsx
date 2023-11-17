import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Box borderRadius='10px' >
        <Slider {...settings}>
          <div>
            <Image src="https://www.dmkeith.com/media/wysiwyg/comingsoon/Ringways-FordQ4-CV-E-TransitCustom-1260x420.jpg" alt="img error" width='100%' borderRadius='10px' />
          </div>
          <div>
            <Image src="https://www.dmkeith.com/media/wysiwyg/offers/DMKeith-Ford-Q2-23-YourFordElectrified-1260x420.jpg" alt="img error" width='100%' borderRadius='10px' />
          </div>
        </Slider>
      </Box>
    );
  }
}