import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useState } from "react";

const MealItemForm = () => {
  const [inputValue,setInputValue] = useState(1);
  const getInputValue = (value) => {
    setInputValue(value);
  }
  console.log(inputValue);
  return (
    <form className={styles.form}>
      <div>
        <Input changeValue={getInputValue}/>
      </div>
      <button>+Add</button>
    </form>
  );
};
export default MealItemForm;
