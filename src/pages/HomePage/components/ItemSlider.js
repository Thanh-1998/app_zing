
function ItemSlider({ slider }) {
  return (
    <div className="images">
      <img src={slider.image} alt={slider.alt} />
    </div>
  );
}

export default ItemSlider;