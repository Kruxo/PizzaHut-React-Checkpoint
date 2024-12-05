import React from 'react';

// Component that represent a single product. A resuable component for any type of product
// Card gets populated with information passed as props from the Items components
export function ProductCard({ name, price, image, onAdd, onIncrement, onDecrement, itemInCart }) {
    return (
        <>
            <div className="product-card">
                <img src={image} alt={name} />
                <div className="product-card-content">
                    <h2 className="product-card-title">{name} </h2>
                    <p className="product-card-price">{price}:-</p>
                    {/* Ternary operator that either displays the increment/decrement button and quantity 
                    or an Add to cart button depending on if there are any items in cart */}
                    {itemInCart ?
                        (
                            <div className="cart-item-controls">
                                <button className="cart-item-button" onClick={onDecrement}>
                                    -
                                </button>
                                <span className="cart-item-quantity">{itemInCart.quantity}</span>
                                <button className="cart-item-button" onClick={onIncrement}>
                                    +
                                </button>
                            </div>
                        )
                        :
                        (
                            <button className="product-card-button" onClick={onAdd}>
                                Add to Cart
                            </button>
                        )}
                </div>
            </div>
        </>
    );
}
