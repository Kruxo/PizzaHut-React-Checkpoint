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
                            <button className="cart-item-button" onClick={() => dispatch(decrement(item.name))}>
                                -
                            </button>
                            <span className="cart-item-quantity">{item.quantity}</span>
                            <button className="cart-item-button" onClick={() => dispatch(increment(item.name))}>
                                +
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty!</p>
            )}
            <p className="cart-total">Total Price: {totalPrice}:-</p>
        </div>
    );
}
