import Commerce from "../lib/commerce";
import React, {
  useReducer,
  createContext,
  useContext,
  useEffect,
} from "react";

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  subtotal: {},
  line_items: [],
};
const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCart = async (data) => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  const getCart = async () => {
    try {
      const data = await Commerce.cart.retrieve();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartDispatchContext.Provider value={{ setCart }}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
