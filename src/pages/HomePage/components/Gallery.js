import React from "react";
import images from "~/assets/images";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';

import ItemSlider from "./ItemSlider";
import { StyledGallery } from "./Styled";

const listSlider = [
  { id: 1, image: `${images.slider_1}`, alt: 'slider 1' },
  { id: 2, image: `${images.slider_2}`, alt: 'slider 2' },
  { id: 3, image: `${images.slider_3}`, alt: 'slider 3' },
  { id: 4, image: `${images.slider_4}`, alt: 'slider 4' },
  { id: 5, image: `${images.slider_5}`, alt: 'slider 5' }
];

function Gallery() {

  return (
    <StyledGallery >
      <div className="gallery">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {listSlider.map(slider => (
            <SwiperSlide key={slider.id}>
              <ItemSlider slider={slider} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </StyledGallery>
  );
}

export default Gallery;