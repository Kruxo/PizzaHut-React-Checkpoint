import "./Style/App.css";
import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer";
import { Items } from "./Components/Items";
import { Navbar } from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increment, decrement } from "./Features/cartSlice";

export default function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Items
          addToCart={(item) => dispatch(addToCart(item))} // Pass the item as a payload, might not be neccessary since Items.jsx and Cart.jsx do the same thing in the component
          cartItems={cartItems}
          increment={(name) => dispatch(increment(name))}
          decrement={(name) => dispatch(decrement(name))}
        />
        <Cart
          items={cartItems}
          increment={(name) => dispatch(increment(name))}
          decrement={(name) => dispatch(decrement(name))}
        />
      </div>
      <Footer />
    </>
  );
}
