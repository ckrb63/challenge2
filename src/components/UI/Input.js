import react, {useState} from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const [inputNumber, setInputNumber] = useState(1);
  const inputChangeHandler = (event) => {
    if(event.target.value<0){
      setInputNumber(0);
      return;
    }
    setInputNumber(event.target.value);
    const sendValue = parseInt(event.target.value);
    props.changeValue(sendValue);
  }
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}  onChange={inputChangeHandler}></input>
    </div>
  );
};

export default Input;
