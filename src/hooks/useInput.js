import { useState } from "react";
const useInput = () => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const inputIsValid = enteredInput.trim() !== '';
  const inputIsInvalid = !inputIsValid && isTouched;
  const inputChangeHandler = (event) =>{
    setEnteredInput(event.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  }

  const reset = () => {
    setEnteredInput('');
    setIsTouched(false);
  }
  return {
    value : enteredInput,
    isTouched,
    inputIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
}
export default useInput;
