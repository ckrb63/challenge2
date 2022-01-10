import {Fragment} from "react";
import Card from "../UI/Card";
import styles from "./Modal.module.css";
import Cart from "./Cart"
import reactDom from "react-dom";

const Backdrop = props => {
  return <div className={styles.backdrop} />
};

const ModalOverlay = props => {
  return <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
};

const Modal = (props) => {

  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop")
      )}
      {reactDom.createPortal(
        <ModalOverlay >
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
