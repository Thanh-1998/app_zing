import styled from "styled-components";

const StyledGallery = styled.div`
.gallery {
  .images {
    border-radius: 5px;
    overflow: hidden
  }
  &:hover .swiper-button-next,
  &:hover .swiper-button-prev {
    transform: scale(1);
  }
  .swiper-button-next,
  .swiper-button-prev {
    transform: scale(0);
    transition: all .3s;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    background-color: hsla(0,0%,100%,.15);
    box-shadow: 0 2px 4px 0 rgba(226,102,102,.15);
    &:after {
      font-size: 30px;
      color: #fff
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
      padding: 10px
    }
    & .multiline-item {
      padding: 0 14px;
      width: calc(100% / 3);
    }
    & .media-item {
      margin-right: 10px
    }
    & .item-thumb {

    }
    & .item-info {
      flex: 1
    }
  }
`

export { StyledGallery, StyledRelease };