import react from "react";
import Card from "../UI/Card";
import styles from "./Modal.module.css";
import Cart from "./Cart"
const Modal = (props) => {
  return (
    <react.Fragment>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <Cart onClick={props.onClick}/>
      </Card>
    </react.Fragment>
  );
};

export default Modal;
