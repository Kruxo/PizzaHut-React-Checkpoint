import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment, decrement } from '../Features/cartSlice';
import { ProductCard } from './ProductCard';

export function ItemsSides() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const getItemInCart = (name) => cartItems.find((item) => item.name === name);

    return (
        <>
            <div className="items-pizza-container">
                <h1 className="items-title">Sides</h1>
                <div className="items-grid">
                    {[
                        { name: "Wakama sallad", price: 30, image: "https://imageproxy.wolt.com/menu/menu-images/shared/f493388e-4b2f-11ee-9f2b-c235978e6232_hr_wakame_sjo_gra_ssallad_2_1.jpg" },
                        { name: "Ellora sallad", price: 25, image: "https://imageproxy.wolt.com/menu/menu-images/shared/9fc01aaa-b9db-11ee-b18a-2e7a678c8307_hr_liten_sallad_1.jpg" },
                        { name: "Pizza sallad", price: 20, image: "https://imageproxy.wolt.com/menu/menu-images/57d40c7ab7426f09a04642ef/201f62cc-8028-11ec-ba07-ee3f245ed3c4_pizzasallad.jpeg?w=600" },
                        { name: "Mix sallad", price: 25, image: "https://imageproxy.wolt.com/menu/menu-images/5cf63f3d2fa64d41feff1ee4/2f21c804-2091-11ee-9d75-162874133aac_extra_sallad_photoroom.png" },
                        { name: "Pommes frites", price: 40, image: "https://imageproxy.wolt.com/menu/menu-images/shared/3e2f3798-bab8-11ee-b9fc-3ad15fbeac7d_stockholm_pommes.jpg?w=600" },
                        { name: "Mozarella sticks", price: 35, image: "https://imageproxy.wolt.com/menu/menu-images/shared/53e0c430-bab8-11ee-81f7-8a4404db9fa7_hr_mozzarella_sticks_1.jpg?w=600" },
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
