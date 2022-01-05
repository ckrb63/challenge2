import react from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "./meals.jpg"

const Header = () => {
  const count = 0;
  return (
    <react.Fragment>
      <header className={styles.header}>
        <p className={styles.title}>ReactMeals</p>
        <HeaderCartButton count={count}>Your cart</HeaderCartButton>
      </header>
      <div className={`${styles['main-image']}`}>
        <img src={mealsImage} alt="meal"></img>
      </div>
    </react.Fragment>
  );
};

export default Header;
