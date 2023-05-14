import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconMore } from "~/components/Icons";
import actions from "./actions";

function ChartNew() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doList());
  }, []);

  const { isLoadingPage, data } = useSelector(state => state.chartReducer)
  console.log(data);
  return (<>
    <h3 className="title-section title title-2 title-cate">
      BXH Nhạc Mới
      <Link to={'/'} className="discovery-link">
        tất cả
        <IconMore direction={-90} />
      </Link>
    </h3>

  </>);
}

export default ChartNew;