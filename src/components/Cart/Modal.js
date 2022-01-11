import { Fragment } from "react";
import styles from "./Modal.module.css";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalPlace = document.getElementById("backdrop");
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onClick={props.onClick} />, portalPlace)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalPlace
      )}
    </Fragment>
  );
};

export default Modal;
