import react, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import Count from "../../store/count";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  let idx = 0;
  const ctx = useContext(Count);
  const mealList = ctx.mealarray;
  const mealListCount = mealList.map((meal) => ({
    ...meal,
    count: parseInt(localStorage.getItem(meal.id)),
  }));
  const [mealListCountArray, setMealListCountArray] = useState(
    mealListCount.filter((meal) => {
      return meal.count > 0;
    })
  );
  const removeFromList = () => {
    setMealListCountArray(mealListCountArray.filter((meal)=>{
      return meal.count>0;
    }))
  }
  const onAddHandler = (id) => {
    const existTotal = parseInt(localStorage.getItem('total'));
    localStorage.setItem('total',existTotal+1);
    for(let i=0;i<mealListCountArray.length;i++){
      if(id==mealListCountArray[i].id)
        idx=i;}
    mealListCountArray[idx].count += 1;
    setMealListCountArray([...mealListCountArray]);
  };
  const onRemoveHandler = (id) => {
    const existTotal = parseInt(localStorage.getItem('total'));
    localStorage.setItem('total',existTotal-1);
    for(let i=0;i<mealListCountArray.length;i++){
      if(id==mealListCountArray[i].id)
        idx=i;}
    mealListCountArray[idx].count -= 1;
    setMealListCountArray([...mealListCountArray]);
    if(mealListCountArray[idx].count == 0)
      removeFromList();
  };
  const onCloseHandler = () =>{
    props.onClick();
  }
  const onOrderHandler = () =>{
    console.log('Order...');
  }
  return (
    <react.Fragment>
      <div className={styles["cart-items"]}>
        {mealListCountArray.map((meal) => (
          <CartItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            price={meal.price}
            amount={meal.count}
            onAdd={onAddHandler}
            onRemove={onRemoveHandler}
          />
        ))}
      </div>
      <div className={styles.total} >
          <label>Total Amount</label>
          <label>$33.00</label>
      </div>
      <div className={styles.actions}>
          <button onClick={onCloseHandler}>Close</button>
          <button onClick={onOrderHandler} className={styles.button}>Order</button>
      </div>
    </react.Fragment>
  );
};

export default Cart;
