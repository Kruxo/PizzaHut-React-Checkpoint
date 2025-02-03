import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, clearCart } from '../Features/cartSlice';
import { useNavigate } from 'react-router-dom';

// Component that displays the cart
export function Cart() {
    const { items, totalPrice } = useSelector((state) => state.cart); // Hook to access the redux state of cart
    const dispatch = useDispatch(); // Hook to dispatch Redux actions

    const navigate = useNavigate();

    const handleConfirmOrder = () => {
        dispatch(clearCart()); // Clears the cart
        navigate("/confirmation"); // Redirects to Confirmation page
    };
    return (
        <div className="cart">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src="https://i.ibb.co/r52d3vd/173332777776908795.png"
                    alt="!PizzaHut Logo"
                    width="172px"
                />
            </div>

            <h2 className="cart-title">Your Cart</h2>
            {/* Checks if the cart has any items with ternary operator */}
            {items.length ? (
                items.map((item) => ( // If cart has items then render out the list of items with map 
                    <div key={item.name} className="cart-item">
                        <div className="cart-item-details">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div>
                                <p className="cart-item-name">{item.name}</p>
                                <p className="cart-item-price">{item.price}:-</p>
                            </div>
                        </div>
                        <div className="cart-item-controls">
                            {/*Dispach action decrement/increment on that specific item and shows the current quantity of that item */}
                            <button className="cart-item-button1" onClick={() => dispatch(decrement(item.name))}>
                                -
                            </button>
                            <span className="cart-item-quantity">{item.quantity}</span>
                            <button className="cart-item-button1" onClick={() => dispatch(increment(item.name))}>
                                +
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="cart-empty-message">Your cart is empty!</p>
            )}
            <div className="cart-summary">
                <p className="cart-total-price">
                    Total Price: <span className="cart-total-highlight">{totalPrice}:-</span>
                </p>
                <button className="cart-confirm-button" onClick={handleConfirmOrder}
                    disabled={items.length === 0}
                    style={{
                        backgroundColor: items.length === 0 ? "#ccc" : "#ff4500",
                        cursor: items.length === 0 ? "not-allowed" : "pointer",
                        opacity: items.length === 0 ? "0.6" : "1",
                        transition: "0.3s"
                    }}>
                    CONFIRM ORDER
                </button>
            </div>
        </div>
    );
}
