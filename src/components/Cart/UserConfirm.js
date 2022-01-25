import { useEffect, useMemo } from "react";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useRef, useState } from "react/cjs/react.development";
import useInput from "../../hooks/useInput";
import classes from "./UserConfirm.module.css";
const UserConfirm = forwardRef((props, ref) => {
  const {
    value: enteredName,
    inputIsValid: nameIsValid,
    inputIsInvalid: nameIsInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput();
  const {
    value: enteredEmail,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput();
  const {
    value: enteredCardNumber,
    inputIsValid: cardNumberIsValid,
    inputIsInvalid: cardNumberIsInvalid,
    inputChangeHandler: cardNumberChangeHandler,
    inputBlurHandler: cardNumberBlurHandler,
    reset: cardNumberReset,
  } = useInput();
  const {
    value: enteredCardPassword,
    inputIsValid: cardPasswordIsValid,
    inputIsInvalid: cardPasswordIsInvalid,
    inputChangeHandler: cardPasswordChangeHandler,
    inputBlurHandler: cardPasswordBlurHandler,
    reset: cardPasswordReset,
  } = useInput();
  
  const allInputValues = useMemo(()=>{return{
    name : enteredName,
    email : enteredEmail,
    cardNumber : enteredCardNumber,
    cardPassword : enteredCardPassword
  }},[enteredName,enteredEmail,enteredCardNumber,enteredCardPassword]);
  
  let formIsValid = false;
  if (nameIsValid && emailIsValid && cardNumberIsValid && cardPasswordIsValid) {
    formIsValid = true;
  }
  const submitHandler = (event) => 
  {
    console.log('first');
    //event.preventDefault();
    if (!formIsValid) return;
    nameReset();
    emailReset();
    cardNumberReset();
    cardPasswordReset();
  };
  useImperativeHandle(ref, ()=>{
    return {
      activate : submitHandler
    };
  })
  useEffect(()=>{
    props.onValidChange(formIsValid);
  },[formIsValid]);
  useEffect(()=>{
    props.inputChange(allInputValues);
  },[allInputValues]);
  const styleInValid = (isInvalid) => {
    return isInvalid
      ? `${classes["form-control"]} ${classes.invalid}`
      : classes["form-control"];
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styleInValid(nameIsInvalid)}>
        <label>Your Name</label>
        <input
          value={enteredName}
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        ></input>
        {nameIsInvalid && (
          <p className={classes.errortext}>Please enter the name!</p>
        )}
      </div>
      <div className={styleInValid(emailIsInvalid)}>
        <label>E-mail</label>
        <input
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        ></input>
        {emailIsInvalid && (
          <p className={classes.errortext}>Please enter the email!</p>
        )}
      </div>
      <div className={styleInValid(cardNumberIsInvalid)}>
        <label>Card Number</label>
        <input
          type="text"
          value={enteredCardNumber}
          onChange={cardNumberChangeHandler}
          onBlur={cardNumberBlurHandler}
        ></input>
        {cardNumberIsInvalid && <p className={classes.errortext}>Incorrect Card Number!</p>}
      </div>
      <div className={styleInValid(cardPasswordIsInvalid)}>
        <label>Card Password</label>
        <input
          type="password"
          value={enteredCardPassword}
          onChange={cardPasswordChangeHandler}
          onBlur={cardPasswordBlurHandler}
        ></input>
        {cardPasswordIsInvalid && <p className={classes.errortext}>Incorrect Card Password!</p>}
      </div>
    </form>
  );
});
export default UserConfirm;
