import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { Box,  IconButton } from "@chakra-ui/react";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProjectTwo = () => {
     // As we have used custom buttons, we need a reference variable to
  // change the state
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [slider, setSlider] = React.useState("Slider");

 

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image: "/p5.jpg",
    },
    {
      image: "/p3.jpg",
    },
    
  ];
  return (
     <Box
        position={"relative"}
        mt={0}
        height={"100%"}
        width={"100%"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="solid"
          position="absolute"
          left={30}
          top={250}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <ArrowLeftIcon size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="solid"
          position="absolute"
          right={30}
          top={250}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <ArrowRightIcon size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              h={500}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize={"contain"}
              backgroundImage={`url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>
  )
}

export default ProjectTwo