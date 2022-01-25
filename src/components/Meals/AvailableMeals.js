import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const [mealsList, setMealsList] = useState([]);
  async function getMeals (){
    const response = await fetch(
      "https://react-http-89f64-default-rtdb.firebaseio.com/meals.json"
    );
    const data = await response.json();
    const loadedMeals = [];
    for (const key in data){
      loadedMeals.push({
        id: key,
        name : data[key].name,
        price : data[key].price,
        description : data[key].description
      })
    }
    setMealsList(loadedMeals);
  }
  useEffect(()=>{
    getMeals();
  },[]);
  //console.log(loadedMeals.length);
  return (
    <Card className={styles.meals}>
      {mealsList.map((meal) => (
        <ul key={meal.id}>
          <MealItem
            key={meal.id}
            id={meal.id}
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
