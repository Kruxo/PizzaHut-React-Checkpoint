import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Features/cartSlice';

export function Cart() {
    const { items, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

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
            {items.length ? (
                items.map((item) => (
                    <div key={item.name} className="cart-item">
                        <div className="cart-item-details">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div>
                                <p className="cart-item-name">{item.name}</p>
                                <p className="cart-item-price">{item.price}:-</p>
                            </div>
                        </div>
                        <div className="cart-item-controls">
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
                <p>Your cart is empty!</p>
            )}
            <div
                style={{
                    borderTop: "1px solid #ccc",
                    paddingTop: "12px",
                }}
            >
                <p
                    style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "0 0 12px",
                        color: "#333",
                    }}
                >
                    Total Price: <span style={{ color: "#ff4500" }}>{totalPrice}:-</span>
                </p>
                <button
                    style={{
                        backgroundColor: "#ff4500",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "12px",
                        width: "100%",
                        fontSize: "16px",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#e03e00")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4500")}
                >
                    CONFIRM ORDER
                </button>
            </div>

        </div>
    );
}
