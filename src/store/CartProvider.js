import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "ADD_TYPE") {
    const existItemsIndex = state.items.findIndex((item)=>(item.id==action.item.id));
    const existItems = state.items[existItemsIndex];
    let updatedItem;
    let updatedItems;
    if(existItems){
      updatedItem = {...existItems, amount: existItems.amount + action.item.amount };
      updatedItems = [...state.items];
      updatedItems[existItemsIndex] = updatedItem;
    }
    else{
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      //...state,
      //items : [...state.items, action.item],
      items: updatedItems,
      totalAmount : updatedTotalAmount
    };
  } else if (action.type == "REMOVE_TYPE") {
    const existItemsIndex = state.items.findIndex((item)=>(item.id==action.id));
    const existItems = state.items[existItemsIndex];
    const updatedTotalAmount = state.totalAmount - existItems.price;
    let updatedItems;
    let updatedItem;
    if(existItems.amount==1){
      updatedItems = state.items.filter((item)=>(
        item.id!==action.id
      ));
    }else{
      updatedItem={...existItems, amount: existItems.amount-1};
      updatedItems=[...state.items];
      updatedItems[existItemsIndex] = updatedItem;
    }
    return {
      items : updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_TYPE",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_TYPE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
