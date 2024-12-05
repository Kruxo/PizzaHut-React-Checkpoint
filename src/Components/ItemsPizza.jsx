import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment, decrement } from '../Features/cartSlice';
import { ProductCard } from './ProductCard';

// Component that displays pizza items
export function ItemsPizza() {
    const dispatch = useDispatch() // Hook to dispatch Redux actions
    const cartItems = useSelector((state) => state.cart.items) // Hook to access the redux state of cart
    const getItemInCart = (name) => cartItems.find((item) => item.name === name)

    return (
        <>
            <div className="items-pizza-container">
                <h1 className="items-title">Pizza</h1>
                <div className="items-grid">
                    {/* Hardcoded array of pizza objects each containing name, price and image 
                    that is iterated with map that then returns a productcard component for each object */}
                    {[
                        { name: "Opera", price: 12, image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/02780f08-560b-11ed-b961-0a9917a49afa_opera__1_.jpeg?w=600" },
                        { name: "Capricciosa", price: 120, image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/7d9bf8b6-560b-11ed-b53b-dedc69a4c8c6_jamaica.jpeg?w=600" },
                        { name: "Bolognese", price: 120, image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/61429ee6-560a-11ed-8f08-0e09c98cbf99_orientale.jpeg?w=600" },
                        { name: "Hawaii", price: 120, image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/ef2e5966-560a-11ed-a000-6600b6848aa1_hawaii_1.jpeg?w=600" },
                        { name: "Margherita", price: 100, image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/3de71f3a-560a-11ed-b51a-721401429a8f_margherita.jpeg?w=600" },
                        { name: "Vesuvio", price: 110, image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/45e5fe86-560a-11ed-a2cf-4a4cdd0d2511_vesuvio.jpeg?w=600" },
                    ].map((product) => {
                        const itemInCart = getItemInCart(product.name) //Checks if product is in the cart
                        return (
                            <ProductCard
                                key={product.name}
                                {...product} // Mapped product from list get passed as props
                                onAdd={() => dispatch(addToCart(product))} // Add to cart redux action
                                onIncrement={() => dispatch(increment(product.name))} // Increment redux action
                                onDecrement={() => dispatch(decrement(product.name))} // Decrement redux action
                                itemInCart={itemInCart} // Pass current state of cart for this product
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
