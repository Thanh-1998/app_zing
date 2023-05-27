import styled from 'styled-components';

const StylesDialog = styled.div`
    position: fixed;
    inset: 0;
    background-color: var(--alpha-50);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);

    & .wrapper-dialog {
      width: 70vw;
      max-width: 900px;
      border-radius: 8px;
      background-color: var(--bg-purple);
      
      & .dialog-headding {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px
      }

      & .title-modal {
        font-size: 24px;
        font-weight: 700;
      }

      & .multiline-theme {
        display: flex;
        flex-wrap: wrap;
      }

      & .multiline-item {
        & .multiline-theme {
          margin: 0 -7px;
          & .multiline-theme {
            margin-bottom: 20px
          }
        }

        & .multiline-item {
          width: calc(100% / 6);
          padding: 0 7px;
        }
      }

      & .dialog-content {
        padding: 0 30px 20px;
      }

      & .card-img {
        border-radius: 5px;
        overflow: hidden
      }
      
      & .title-types {
        width: 100%;
        font-size: 18px;
        margin-bottom: 10px;

        & + .multiline-item {
          width: 100%
        }
      }

      & .name-theme {
        font-size: 12px;
        padding: 5px 0;
        text-transform: capitalize
      }

      & .theme-item {
        cursor: pointer;
        & img {
          transition: transform .7s;
        }
        &:hover img {
          transform: scale(1.1) translateZ(0);
        }
      }

      & .theme-color {
        width: 100%;
        height: 100%;
        height: 85.55px;
        border-radius: 5px;
      }
    }
`;

export default StylesDialog;
