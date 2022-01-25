import react, { useContext, useRef } from "react";
import { useState } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "./Modal";
import Input from "../UI/Input";
import UserConfirm from "./UserConfirm";

const Cart = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const submitRef = useRef();
  const cartCtx = useContext(CartContext);
  const hasItem = cartCtx.items.length > 0;
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const totalOrderForm = {
    orderList : cartCtx,
    customerInfo : inputValues
  };
  const onAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null,item)}
          onRemove={onRemoveHandler.bind(null,item.id)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  async function postOrderHandler(order){
    await fetch('https://react-http-89f64-default-rtdb.firebaseio.com/order.json',{
      method : 'POST',
      body : JSON.stringify(order),
      headers : {
        'Content-Type' : 'applicatlion/json'
      }
    });
  }
  const submitHandler = () => {
    postOrderHandler(totalOrderForm);
    submitRef.current.activate();
  }
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <label>Total Amount</label>
        <label>{`$${totalAmount}`}</label>
      </div>
      <UserConfirm onValidChange={setFormIsValid} ref={submitRef} inputChange={setInputValues}></UserConfirm>
      <div className={styles.actions}>
        <button onClick={props.onClose}>Close</button>
        {hasItem && <button className={styles.button} onClick={submitHandler} disabled={!formIsValid}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
