import {useContext} from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addCart = (value) => {
    const intValue = +value;
    cartCtx.addItem({
      name:props.name,
      id:props.id,
      amount:intValue,
      price:props.price
    });
  }
  return (
    <div className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${props.price.toFixed(2)}</p>
      </div>
      <MealItemForm onClick={addCart} id={props.id}/>
    </div>
  );
};
export default MealItem;
