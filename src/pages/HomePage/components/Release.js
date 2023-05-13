import React, { useEffect } from "react";
import { StyledRelease } from "./Styled";
import { IconDots, IconMore } from "~/components/Icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../actions";
import ItemRelease from "./ItemRelease";

function Release() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(actions.doLists({ start: 0, count: 12 }));
  }, []);

  const { isLoadingPage, data } = useSelector(state => state.homeReducer);

  console.log(data);


  return (
    <StyledRelease>
      <h3 className="title-section title title-2">
        Mới Phát Hành
        <Link to={'/'} className="discovery-link">
          tất cả
          <IconMore direction={-90} />
        </Link>
      </h3>

      <div className="select-tab">
        <button className="btn-tab">tất cả</button>
        <button className="btn-tab">việt nam</button>
        <button className="btn-tab">quốc tế</button>
      </div>

      <div className="select-content">
        <div className="multiline">
          {data.map(item => (
            <ItemRelease key={item.id} item={item} />
          ))}
        </div>
      </div>

    </StyledRelease>
  );
}

export default Release;