import react, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [bumpState,setBumpState] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  let bumpStyle = `${styles.button} ${bumpState ? styles.bump : ''}`;

  useEffect(()=>{
    if(cartCtx.items.length === 0){
      return;
    }
    setBumpState(true);
    setTimeout(()=>{
      setBumpState(false);
    },300);
  },[cartCtx.items]);

  return (
    <react.Fragment>
      <button
        onClick={props.onClick}
        className={bumpStyle}
      >
        <CartIcon />
        <p>{props.children}</p>
        <div className={styles.badge}>{numberOfCartItems}</div>
      </button>
    </react.Fragment>
  );
};

export default HeaderCartButton;
