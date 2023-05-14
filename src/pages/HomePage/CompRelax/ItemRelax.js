import React from "react";
import { IconDots, IconFavourite, IconPlay } from "~/components/Icons";

import { imageRelax } from "~/assets/images";

function ItemRelax() {
  const listData = [
    { id: 1, thumbnail: `${imageRelax.chill_1}`, title: 'Ở đây có những bản hit cực chill, vừa nghe vừa feel', },
    { id: 2, thumbnail: `${imageRelax.chill_2}`, title: 'Va vào những giai điệu thư giãn của V-Pop' },
    { id: 3, thumbnail: `${imageRelax.chill_3}`, title: 'Nhạc Việt "lâu phai" và gây nghiện hoài hoài' },
    { id: 4, thumbnail: `${imageRelax.chill_4}`, title: 'Thanh âm Lofi quen mà lạ, lạ mà quen' },
    { id: 5, thumbnail: `${imageRelax.chill_5}`, title: 'Khi bạn cần giai điệu để xoa dịu những tổn thương đã qua' }
  ];
  return (<>
    <div className="playlist playlist-5">
      {listData.map(song => {
        const { id, thumbnail, title } = song;
        return (
          <div className="item-playlist" key={id}>
            <div className="card-image">
              <figure className="image-thumb">
                <img src={thumbnail} />
              </figure>

              <div className="box-action">
                <div className="action-playlist">
                  <button className="item-action add-favourite">
                    <IconFavourite width='20px' height='20px' fill='var(--text-primary)' />
                  </button>

                  <button className="item-action play-song">
                    <IconPlay width='45px' height='45px' fill='var(--text-primary)' />
                  </button>

                  <button className="item-action play-song">
                    <IconDots width='20' height='20px' />
                  </button>
                </div>
              </div>
            </div>
            <h3 className="card-title">
              <span className="item-sub">{title}</span>
            </h3>
          </div>
        )
      })}
    </div>
  </>);
}

export default ItemRelax;