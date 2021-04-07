import React from "react";
import ImageReusable from "./imageReusable";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Gallery = () => {
  return (
    <Slider {...settings} className="overflow-hidden">
      <ImageReusable
        alt="picture of school site project"
        filename="IMG_3967001.jpg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="IMG_3968001.jpg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image3(3).jpeg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image2(1).jpeg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image0(4).jpeg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image9(3).jpeg"
      />
    </Slider>
  );
};

export default Gallery;
