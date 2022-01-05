import { useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const pullUpValue = (value) => {
    props.addMeal(value);
  }
  return (
    <Card className={styles.meals}>
      {props.mealList.map((meal) => (
        <ul key={meal.id}>
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            onClick={pullUpValue}
          />
        </ul>
      ))}
    </Card>
  );
};
export default AvailableMeals;
