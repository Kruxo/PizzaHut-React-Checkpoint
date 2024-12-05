import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment, decrement } from '../Features/cartSlice';
import { ProductCard } from './ProductCard';

export function Items() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const getItemInCart = (name) => cartItems.find((item) => item.name === name);

    return (
        <div className="items-container">
            {[
                { name: 'Vera', price: '100', image: "https://images.deliveryhero.io/image/fd-op/Products/34609892.jpg??width=500" },
                { name: 'Frutti Del Mare', price: '90', image: "https://images.deliveryhero.io/image/fd-op/Products/34609891.jpg??width=500" },
                { name: 'Pompeii', price: '120', image: "https://images.deliveryhero.io/image/fd-op/Products/34609370.jpg??width=500" },
                { name: 'La Bella', price: '130', image: "https://images.deliveryhero.io/image/fd-op/Products/34609896.jpg??width=500" },
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
    );
}
