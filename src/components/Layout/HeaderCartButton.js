import react from "react";
import { useState } from "react";
import CartIcon from "../Cart/CartIcon";
import Modal from "../Cart/Modal";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  return (
    <react.Fragment>
      <button
        onClick={props.onClick}
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
