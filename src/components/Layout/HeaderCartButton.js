import react from "react";
import { useState } from "react";
import CartIcon from "../Cart/CartIcon";
import Modal from "../Cart/Modal";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [modalScreen, setModalScreen] = useState(<div></div>);

  const cartModalClose= () =>{
    setModalScreen(<div></div>);
  }
  const cartButtonClick = () => {
    setModalScreen(<Modal onClick={cartModalClose}></Modal>);
  };
  return (
    <react.Fragment>
      {modalScreen}
      <button
        onClick={cartButtonClick}
        className={`${styles.button} ${styles.bump}`}
      >
        <CartIcon />
        <p>{props.children}</p>
        <div className={styles.badge}>{props.count}</div>
      </button>
    </react.Fragment>
  );
};

export default HeaderCartButton;
