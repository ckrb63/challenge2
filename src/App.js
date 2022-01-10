import react from "react";
import { useState } from "react";
import Description from "./components/Layout/Description";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import Count from "./store/count";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
      <react.Fragment>
        {cartIsShown && <Cart/>}
        <Header onShowCart={showCartHandler} />
        <Description/>
        <AvailableMeals />
      </react.Fragment>
  );
}

export default App;
