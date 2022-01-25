import react, { useContext, useRef } from "react";
import { useState } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "./Modal";
import Input from "../UI/Input";
import UserConfirm from "./UserConfirm";

const Cart = (props) => {
  const submitRef = useRef();
  const cartCtx = useContext(CartContext);
  const hasItem = cartCtx.items.length > 0;
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const onAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };
  const onRemoveHandler = () => {};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null,item)}
          onRemove={onRemoveHandler}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  const submitHandler = () => {
    submitRef.current.activate();
  }
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <label>Total Amount</label>
        <label>{`$${totalAmount}`}</label>
      </div>
      <UserConfirm id={'1'} ref={submitRef}></UserConfirm>
      <div className={styles.actions}>
        <button onClick={props.onClose}>Close</button>
        {hasItem && <button className={styles.button} onClick={submitHandler}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
