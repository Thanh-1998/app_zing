function ItemChart({ song }) {
  const { id, performer, thumbnail, title, order } = song;
  return (
    <div className="chart-slider">
      <div className="chart-item">
        <div className="slider-image">
          <figure className="image is120x120">
            <img src={thumbnail} alt={title} />
          </figure>
        </div>

        <div className="slider-info">
          <div className="info-top">
            <h3 className="title-info">{title}</h3>
            <span className="sub-title performer">{performer}</span>
          </div>

          <div className="info-bottom">
            <h3 className="order-chart">{order.replace('0', '#')}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemChart;