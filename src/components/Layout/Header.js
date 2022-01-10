import react, { useContext, useEffect, useState } from "react";
import Count from "../../store/count";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "./meals.jpg"

const Header = (props) => {

  return (
    <react.Fragment>
      <header className={styles.header}>
        <p className={styles.title}>ReactMeals</p>
        <HeaderCartButton onClick={props.onShowCart}>Your cart</HeaderCartButton>
      </header>
      <div className={`${styles['main-image']}`}>
        <img src={mealsImage} alt="meal"></img>
      </div>
    </react.Fragment>
  );
};

export default Header;
