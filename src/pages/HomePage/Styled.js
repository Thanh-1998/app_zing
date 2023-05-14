import styled from "styled-components";

const StyledGallery = styled.div`
  padding-top: 32px;
  .gallery {
    position: relative;
    min-height: 203px;
    margin: 0 -15px;
    overflow: hidden;
    & .item-gallery {
      position: absolute;
      width: calc(100% / 3);
      height: auto;
      transition: transform .5s ease-in-out,opacity .5s ease-in-out,z-index 0s linear .25s;
      z-index: 0;
      border-radius: 8px;
      padding: 0 15px;
      cursor: pointer;
      z-index: 1
    }
    .images {
      display: flex;
      border-radius: 8px;
      overflow: hidden
    }
    &-first {
      opacity: 0;
      transform: translateX(100%)
    }
    &-second {
      opacity: 1;
      transform: translateX(0)
    }
    &-third {
      opacity: 1;
      transform: translateX(100%)
    }
    &-four {
      opacity: 1;
      transform: translateX(200%)
    }
    &-five {
      opacity: 0;
      transform: translateX(100%)
    }
    &:hover .btn-slider {
      display: flex
    }
    .btn-slider {
      position: absolute;
      width: 55px;
      height: 55px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
      align-items: center;
      justify-content: center;
      background-color: hsla(0,0%,100%,.15);
      box-shadow: 0 2px 4px 0 rgba(226,102,102,.15);
      border-radius: 50%;
      z-index: 2;
      &.btn-next {
        right: 25px
      }
      &.btn-prev {
        left: 25px
      }
    }
  
  }
`;

const StyledRelease = styled.div`
  color: var(--text-primary);
  & .multiline {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    & .wrap-multiline {
      display: flex;
      align-items: center;
      padding: 10px;
      &:hover .item-visible{
       opacity: 1;
      }
    }
    & .multiline-item {
      padding: 0 14px;
      width: calc(100% / 3);
    }
    & .media-item {
      margin-right: 10px
    }
    & .item-info {
      flex: 1
    }
    .item-visible {
      opacity: 0
    }
    & .item-thumb {
      position: relative;
      cursor: pointer;
      & .action-song {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--alpha-50);
        .action-play:hover svg {
          filter: brightness(.9);
        }
      }
    }
  }
`;

const StyledRelax = styled.div`
  color: var(--text-primary);
  & .multiline {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    & .wrap-multiline {
      display: flex;
      align-items: center;
      padding: 10px;
      &:hover .item-visible{
       opacity: 1;
      }
    }
    & .multiline-item {
      padding: 0 14px;
      width: calc(100% / 3);
    }
    & .media-item {
      margin-right: 10px
    }
    & .item-info {
      flex: 1
    }
    .item-visible {
      opacity: 0
    }
    & .item-thumb {
      position: relative;
      cursor: pointer;
      & .action-song {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--alpha-50);
        .action-play:hover svg {
          filter: brightness(.9);
        }
      }
    }
  }
`

export { StyledGallery, StyledRelease, StyledRelax };