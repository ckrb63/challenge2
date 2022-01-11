import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const countRef = useRef(0);

  const addCartButtonHandler = (event) => {
    event.preventDefault();
    const count = countRef.current.value;
    props.onClick(count);
  };

  return (
    <form className={styles.form}>
      <div>
        <Input label='Amount' input={{
          ref: countRef,
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}/>
      </div>
      <button 
      onClick={addCartButtonHandler}
      >
        +Add</button>
    </form>
  );
};
export default MealItemForm;
