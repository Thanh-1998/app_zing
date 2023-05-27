import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconDirection, IconMore } from "~/components/Icons";
import actions from "./actions";
import ItemChart from "./ItemChart";
import { StyleChartSlider } from "../Styled";

function ChartNew() {
  const { isLoadingPage, data } = useSelector(state => state.chartReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doList({ start: 0, count: 6 }));
  }, []);

  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (translate <= 390 * 3) {
        setTranslate(prevTranslate => prevTranslate + 390);
      } else {
        setTranslate(0);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [translate]);

  const handleNext = () => {
    setTranslate(prevTranslate => (prevTranslate + 390) % (390 * 5));
  };

  const handlePrev = () => {
    setTranslate(prevTranslate => (prevTranslate - 390 + (390 * 5)) % (390 * 5));
  };

  return (
    <>
      <h3 className="title-section title title-2 title-cate">
        BXH Nhạc Mới
        <Link to={'/'} className="discovery-link">
          tất cả
          <IconMore direction={-90} />
        </Link>
      </h3>

      <StyleChartSlider>
        <div className="wrapper-carousel">
          <div
            className="chart-wrapper"
            style={{ transform: `translate3d(-${translate}px, 0px, 0px)` }}
          >
            {data.map(song => (
              <ItemChart key={song.id} song={song} />
            ))}
            <div className="chart-slider">
              <div className="chart-item item-more">
                <span>xem tất cả</span>
              </div>
            </div>
          </div>

          <div className="nav-slider">
            <button
              className="btn-slider btn-next btn-38x38"
              onClick={handleNext}>
              <IconDirection direction='180' fill='#fff' width='15px' height='15px' />
            </button>
            <button
              className="btn-slider btn-prev btn-38x38"
              onClick={handlePrev}>
              <IconDirection fill='#fff' width='15px' height='15px' />
            </button>
          </div>
        </div>
      </StyleChartSlider>

    </>
  );
}

export default ChartNew;