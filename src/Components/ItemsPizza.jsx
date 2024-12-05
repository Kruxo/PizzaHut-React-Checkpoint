import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment, decrement } from '../Features/cartSlice';
import { ProductCard } from './ProductCard';

export function ItemsPizza() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const getItemInCart = (name) => cartItems.find((item) => item.name === name);

    return (
        <>
            <div className="items-pizza-container">
                <h1 className="items-title">Pizza</h1>
                <div className="items-grid">
                    {[
                        { name: "Opera", price: "125", image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/02780f08-560b-11ed-b961-0a9917a49afa_opera__1_.jpeg?w=600" },
                        { name: "Capricciosa", price: "120", image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/7d9bf8b6-560b-11ed-b53b-dedc69a4c8c6_jamaica.jpeg?w=600" },
                        { name: "Bolognese", price: "120", image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/61429ee6-560a-11ed-8f08-0e09c98cbf99_orientale.jpeg?w=600" },
                        { name: "Hawaii", price: "120", image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/ef2e5966-560a-11ed-a000-6600b6848aa1_hawaii_1.jpeg?w=600" },
                        { name: "Margherita", price: "100", image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/3de71f3a-560a-11ed-b51a-721401429a8f_margherita.jpeg?w=600" },
                        { name: "Vesuvio", price: "110", image: "https://imageproxy.wolt.com/menu/menu-images/635a9823604091275ae7babb/45e5fe86-560a-11ed-a2cf-4a4cdd0d2511_vesuvio.jpeg?w=600" },
                    ].map((product) => {
                        const itemInCart = getItemInCart(product.name);
                        return (
                            <ProductCard
                                key={product.name}
                                {...product}
                                onAdd={() => dispatch(addToCart(product))}
                                onIncrement={() => dispatch(increment(product.name))}
                                onDecrement={() => dispatch(decrement(product.name))}
                                itemInCart={itemInCart}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
