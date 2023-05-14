import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { IconMore } from "~/components/Icons";
import { StyledRelax } from "../Styled";
import ItemRelax from "./ItemRelax";

function Relax() {
  return (<StyledRelax>
    <h3 className="title-section title title-2 title-cate">
      Chill
      <Link to={'/'} className="discovery-link">
        tất cả
        <IconMore direction={-90} />
      </Link>
    </h3>

    <div className="section-list">
      <ItemRelax />
    </div>
  </StyledRelax>);
}

export default Relax;