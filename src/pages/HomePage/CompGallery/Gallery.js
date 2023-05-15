import React, { useCallback, useEffect, useRef, useState } from "react";
import { images } from "~/assets/images";

import ItemSlider from "./ItemSlider";
import { StyledGallery } from "../Styled";
import { IconDirection } from "~/components/Icons";

const listSlider = [
  { id: 1, image: `${images.slider_1}`, alt: 'slider 1' },
  { id: 2, image: `${images.slider_2}`, alt: 'slider 2' },
  { id: 3, image: `${images.slider_3}`, alt: 'slider 3' },
  { id: 4, image: `${images.slider_4}`, alt: 'slider 4' },
  { id: 5, image: `${images.slider_5}`, alt: 'slider 5' }
];

function Gallery() {

  const [indexGallery, setIndexGallery] = useState(0);
  const [isMouse, setIsMouse] = useState(true);

  useEffect(() => {
    if (isMouse) {
      const timer = setInterval(() => {
        setIndexGallery(prevIndex => (prevIndex + 1) % listSlider.length);
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [indexGallery, isMouse]);

  const handleNext = useCallback(() => {
    setIndexGallery(prevIndex => (prevIndex + 1) % listSlider.length);
  }, [indexGallery]);

  const handlePrev = useCallback(() => {
    setIndexGallery(prevIndex => (prevIndex - 1) % listSlider.length);
  }, [indexGallery]);

  const handleMouse = useCallback((e) => {
    setIsMouse(false)
  }, [isMouse]);

  const handleMouseLeave = useCallback(() => {
    setIsMouse(true)
  }, [isMouse]);

  return (
    <StyledGallery >
      <div className="gallery wrapper-carousel" onMouseOver={handleMouse} onMouseLeave={handleMouseLeave}>
        {listSlider.map((slider, index) => {
          const name = ['gallery-first', 'gallery-second', 'gallery-third', 'gallery-four', 'gallery-five']

          const getIndex = (index) => {
            const reusult = (index + listSlider.length - indexGallery) % listSlider.length
            return reusult
          };

          const className = name[getIndex(index)];
          return (
            <div key={slider.id} className={`item-gallery ${className}`}>
              <ItemSlider slider={slider} />
            </div>
          )
        })}
        <div className="nav-slider">
          <button
            className="btn-slider btn-next btn-55x55"
            onClick={handleNext}>
            <IconDirection direction='180' fill='#fff' />
          </button>

          <button
            className="btn-slider btn-prev btn-55x55"
            onClick={handlePrev}>
            <IconDirection fill='#fff' />
          </button>
        </div>
      </div>
    </StyledGallery>
  );
}

export default Gallery;