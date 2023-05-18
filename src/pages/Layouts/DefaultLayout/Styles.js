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
  z-index: 10;
  padding: 0 var(--padding-section);
  background-color: var(--bg-header);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  box-shadow: 0 3px 5px var(--shadow-header);
  & .header {
    width: 100%;
    height: 100%;
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
      position: relative;
      width: 100%;
      max-width: 440px;
      & [data-tippy-root] {
        width: 100%;
      }
      & .wrap-search {
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 8px;
        background-color: var(--bg-alpha);
        & input {
          width: 100%;
          height: 100%;
        }
        &.focus-search {
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          background-color: var(--bg-purple);
        }
      }
      & .wrap-search:not(.focus-search) {
        border-radius: 20px;
      }
      & .wrap-result {
        position: absolute;
        width: 100%;
        font-size: 14px;
        top: 50px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        overflow: hidden;
        color: var(--text-primary);
        .result-suggest {
          padding: 13px 10px;
          .result-heading {
            margin: 0;
            padding: 0 10px 8px;
          }
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
    .header-settings {
      position: relative;
      & [data-tippy-root] {
        width: 100%;
      }
      .wrap-settings {
        position: absolute;
        top: 58px;
        right: 0;
        padding-top: 2px;
        color: var(--navigation-text);
        & .wrapper {
          border-radius: 8px;
        }
      }
      .settings-list {
        padding: 6px;
      }
      & .select-theme {
        position: absolute;
        left: calc(-100% + 10px);
        top: 42px;
        width: 100%;
        padding: 6px;
        border-radius: 8px;
        background-color: var(--bg-purple);
        box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
        & .setting-theme {
          padding: 8px 12px
        }
      }
    }
    & .icon-header {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 12px;
    }
    & .header-login {
      margin-left: 12px;
      background: var(--color-purple);
      & span {
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .popper-item {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--bg-alpha);
    }
  }
  .popper-name {
    margin-left: 10px;
  }
`;

export { StyledSidebar, StyledHeader };
