import react from "react";
import { useState } from "react";
import Description from "./components/Layout/Description";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Count from "./store/count";
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
function App() {
  const [totalMealCount, setTotalCount] = useState(
    parseInt(localStorage.getItem('total'))
  );

  const addMealHandler = (value) => {
    value = parseInt(value);
    setTotalCount(totalMealCount+value);
    console.log(typeof(totalMealCount));
    console.log(typeof(value));
  };
  return (
    <Count.Provider value={{
      count : totalMealCount,
      mealarray : DUMMY_MEALS
    }}>
      <react.Fragment>
      <Header />
      <Description/>
      <AvailableMeals mealList={DUMMY_MEALS} addMeal={addMealHandler}/>
      </react.Fragment>
    </Count.Provider>
  );
}

export default App;
