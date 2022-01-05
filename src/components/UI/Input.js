import react, {useState} from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const [inputNumber, setInputNumber] = useState(1);
  const inputChangeHandler = (event) => {
    setInputNumber(event.target.value);
    props.changeValue(event.target.value);
  }
  return (
    <div className={styles.input}>
      <label>Amount</label>
      <input value={inputNumber} type={'number'} onChange={inputChangeHandler}></input>
    </div>
  );
};

export default Input;
