import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useState } from "react";

const MealItemForm = (props) => {
  const [inputValue,setInputValue] = useState(1);
  const getInputValue = (value) => {
    setInputValue(value);
  }
  
  const addCartButtonHandler = () => {
    props.onClick(inputValue);
    let existValue = 0;
    let totalValue = 0;
    if(localStorage.getItem(props.id))
      existValue = parseInt(localStorage.getItem(props.id));
    localStorage.setItem(props.id,inputValue+existValue);
    if(localStorage.getItem('total'))
      totalValue = parseInt(localStorage.getItem('total'));
    localStorage.setItem('total',totalValue+inputValue);
  }
  return (
    <div className={styles.form}>
      <div>
        <Input label='Amount' input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          
        }} changeValue={getInputValue}/>
      </div>
      <button 
      onClick={addCartButtonHandler}
      >
        +Add</button>
    </div>
  );
};
export default MealItemForm;
