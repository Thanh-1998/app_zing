import { useDispatch, useSelector } from "react-redux";
import StylesDialog from "./Styled";
import { IconClose } from "../Icons";
import { useEffect, useRef } from "react";

function ModalDialog() {
  const { open, title, component } = useSelector(state => state.modalDialog);
  const dispatch = useDispatch();
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      modalRef.current && !modalRef.current.contains(e.target) && dispatch({ type: `CLOSE_MODAL` })
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick)

  }, [])

  const handleClose = () => {
    dispatch({ type: `CLOSE_MODAL` })
  };

  return (
    <>
      {open && (
        <StylesDialog>
          <div className="wrapper-dialog" ref={modalRef}>
            <div className="dialog-headding">
              <h3 className="title-modal">
                {title}
              </h3>

              <button className="close-modal" onClick={handleClose}>
                <IconClose />
              </button>
            </div>
            <div className="dialog-content">
              {component}
            </div>
          </div>
        </StylesDialog>
      )}
    </>
  );
}

export default ModalDialog;