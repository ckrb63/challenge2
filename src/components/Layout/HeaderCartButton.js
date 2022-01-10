import react, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <react.Fragment>
      <button
        onClick={props.onClick}
        className={`${styles.button} ${styles.bump}`}
      >
        <CartIcon />
        <p>{props.children}</p>
        <div className={styles.badge}>{numberOfCartItems}</div>
      </button>
    </react.Fragment>
  );
};

export default HeaderCartButton;
