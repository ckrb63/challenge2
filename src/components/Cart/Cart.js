import react, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import Count from "../../store/count";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "./Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          maount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <label>Total Amount</label>
        <label>$33.00</label>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose}>Close</button>
        <button  className={styles.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
