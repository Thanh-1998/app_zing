import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { IconDots, IconActionPay } from "~/components/Icons";


function ItemRelease({ item }) {
  const dispatch = useDispatch();
  const audioRef = useRef();
  const togglePlay = () => {
  }

  return (
    <div className="multiline-item" key={item.id}>

      <div className="wrap-multiline item-hover">
        <div className="item-thumb media-item">
          <figure className="img-song is60x60">
            <img src={item.thumbnail} alt={item.artists_names} />
          </figure>

          <div className="action-song item-visible" onClick={togglePlay}>
            <button className="action-play">
              <IconActionPay fill='#fff' width='18px' height='18px' />
            </button>
          </div>
        </div>

        <div className="item-info media-item">
          <div className="heading-item">
            <span className="title-item title-wrap">{item.title}</span>
          </div>
          <h3 className="subtitle-item">
            <span className="performer"> {item.performer}</span>
          </h3>
        </div>

        <div className="more-media item-visible">
          <button className="media-popup">
            <IconDots />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemRelease;