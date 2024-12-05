import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment, decrement } from '../Features/cartSlice';
import { ProductCard } from './ProductCard';

export function ItemsSallad() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const getItemInCart = (name) => cartItems.find((item) => item.name === name);

    return (
        <>
            <div className="items-pizza-container">
                <h1 className="items-title">Sallad</h1>
                <div className="items-grid">
                    {[
                        { name: "Thai sallad", price: 115, image: "https://imageproxy.wolt.com/menu/menu-images/shared/ff2380ee-7a58-11ee-97ff-c616fe19609b_havanna_sallad__ra_kor__ananas__skinka__ost_.jpg?w=600" },
                        { name: "Special sallad", price: 100, image: "https://imageproxy.wolt.com/menu/menu-images/shared/d5338b82-68db-11ee-a2e9-12cb1a9f81b0_stockholm_mezesallad.jpg" },
                        { name: "Prawn sallad", price: 125, image: "https://imageproxy.wolt.com/menu/menu-images/shared/d7ecb9a2-68db-11ee-8773-8631431d82ba_stockholm_ra_ksallad.jpg" },
                        { name: "Greeek sallad", price: 120, image: "https://imageproxy.wolt.com/menu/menu-images/shared/a71881fa-f89a-11ed-8ab0-060977dda616_grekisk_sallad__liten_och_stor_.jpg" },
                        { name: "Vietnamese sallad", price: 115, image: "https://imageproxy.wolt.com/menu/menu-images/6492f6c3b1b49746da97757d/21e9f952-3465-11ef-bc89-02af01e6f221_stockholm_viet_sallad.jpg" },
                        { name: "Chevré Sallad", price: 120, image: "https://imageproxy.wolt.com/menu/menu-images/shared/c9a4579c-68db-11ee-a561-6a96e250a44e_stockholm_chevre_chaud_sallad.jpg" },
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
