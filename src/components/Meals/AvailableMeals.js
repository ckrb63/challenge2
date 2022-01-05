import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  return (
    <Card className={styles.meals}>
      {props.mealList.map((meal) => (
        <ul key={meal.id}>
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        </ul>
      ))}
    </Card>
  );
};
export default AvailableMeals;
