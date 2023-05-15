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
`;

const StyleChartSlider = styled.div`
  overflow: hidden;
  & .wrapper-carousel {
    position: relative;
  }
 & .chart-wrapper {
  color: var(--text-primary);
  margin: 0 -15px;
  display: flex;
  transition: transform .3s ease .1s;
  width: 99999px;
  & .chart-slider {
    padding: 0 14px;
    width:  390px;
    & .chart-item {
      background: var(--box-item);
      padding: 15px;
      display: flex;
      border-radius: 4px
    }
    & .slider-image {
      margin-right: 10px;
      & .image {
        border-radius: 5px;
        overflow: hidden
      }
    }
    & .slider-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .title-info {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.38;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
      & .sub-title {
        font-size: 12px
      }
      & .order-chart {
        opacity: .4;
        -webkit-text-stroke: 1px var(--color-white);
        font-size: 40px;
        font-weight: 900;
        color: transparent;
        line-height: 1;
        font-family: "Roboto",sans-serif;
      }
    }
    & .item-more {
      font-size: 14px;
      font-weight: 700;
      height: 100%;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      color: var(--color-purple);
    }
  }
 }
`;

export {
  StyledGallery,
  StyledRelease,
  StyledRelax,
  StyleChartSlider
};