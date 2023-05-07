import React from "react";
import { StyledHeader } from "./Styles";
import { ButtonIcon } from "~/components/CustomForm";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header">
        <div className="header-left">
          <ButtonIcon></ButtonIcon>
        </div>
        <div className="header-right"></div>
      </div>
    </StyledHeader>
  )
}

export default Header;