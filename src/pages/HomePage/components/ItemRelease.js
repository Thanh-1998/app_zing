import { IconDots } from "~/components/Icons";

function ItemRelease({ item }) {
  return (
    <div className="multiline-item" key={item.id}>
      <div className="wrap-multiline item-hover">
        <div className="item-thumb media-item">
          <figure className="img-song is60x60">
            <img src={item.thumbnail} alt={item.artists_names} />
          </figure>
        </div>

        <div className="item-info media-item">
          <div className="heading-item">
            <span className="title-item title-wrap">{item.title}</span>
          </div>
          <h3 className="subtitle-item">
            <span className="performer"> {item.performer}</span>
          </h3>
        </div>

        <div className="more-media">
          <button className="media-popup">
            <IconDots />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemRelease;