import styled, { css } from "styled-components";

const StyledSidebar = styled.aside`
  position: relative;
  width: 240px;
  height: 100%;
  .wrapper-sidebar {
    height: 100%;
  }
  .logo {
    width: 120px;
    height: 40px;
    padding: 13px 25px 0px 28px;
  }
  .nav-sidebar {
    margin: 19px 0;
  }
  .line-sidebar {
    width: calc(100% - 50px);
    left: 25px;
  }
  .nav-link {
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px 21px;
    &>svg {
      margin-right: 12px;
    }
  }
  .nav-item:not(:hover) .nav-button {
   display: none;
  }
  .nav-tag {
    margin-left: 8px
  }
  .nav-secondary {
    padding-top: 16px;
  }
  .add-playlist {
    position: absolute;
    bottom: 0;
    width: 100%;
    & button {
      min-height: 54px;
      padding: 0 24px;
      & svg {
        margin-right: 12px;
      }
    }
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 240px;
  height: 70px;
`;

export { StyledSidebar, StyledHeader };