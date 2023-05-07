import styled, { css } from 'styled-components';

const StyledSidebar = styled.aside`
  position: relative;
  width: 240px;
  height: 100%;
  .wrapper-sidebar {
    height: 100%;
  }
  .logo {
    width: 120px;
    padding: 13px 25px 0px 28px;
    cursor: pointer;
  }
  .nav-sidebar {
    margin: 12px 0 19px;
  }
  .line-sidebar {
    position: relative;
    width: calc(100% - 50px);
    left: 25px;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      border-bottom: 1px solid var(--border-primary);
    }
  }
  .nav-link {
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px 21px;
    & > svg {
      margin-right: 12px;
    }
  }
  .nav-item:not(:hover) .nav-button {
    display: none;
  }
  .nav-tag {
    margin-left: 8px;
  }
  .nav-secondary {
    padding-top: 16px;
  }
  .add-playlist {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid var(--border-primary);
    & button {
      color: var(--navigation-text);
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
  display: flex;
  align-items: center;
  padding: 0 59px;
  & .header {
    width: 100%;
    display: flex;
    align-items: center;
  }
  & .header-left {
    display: flex;
    flex-grow: 1;
    & > button {
      opacity: 0.3;
      margin-right: 20px;
    }
    .header-search {
      width: 100%;
      max-width: 440px;
      & .wrap-search {
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 8px;
        border-radius: 20px;
        background-color: var(--bg-alpha);
        & input {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  & .header-right {
    display: flex;
    .header-download {
      display: flex;
      align-items: center;
      background-color: var(--bg-alpha);
      color: var(--color-link);
      cursor: pointer;
      & span {
        margin-left: 4px;
        font-weight: 600;
      }
      &:hover {
        color: var(--color-purple);
        filter: brightness(0.9);
      }
    }
    & .icon-header {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 10px;
    }
    & .header-login {
      margin-left: 10px;
      background: var(--color-purple);
      & span {
        font-weight: 600;
        color: #fff;
      }
    }
  }
`;

export { StyledSidebar, StyledHeader };
