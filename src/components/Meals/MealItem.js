import react from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const addCart = (value) => {
    props.onClick(value);
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
