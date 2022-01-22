import React from 'react';
import { CartContentContainer } from "./CartContent.styles";

import EmptyCart from '../../assets/imgs/empty-cart.png';

const CartContent = () => {
    return (
        <CartContentContainer>
            <img src={EmptyCart} alt="Пустая корзина"/>
            <h2>В вашей корзине пока пусто</h2>
            <p>Тут появятся товары, которые вы закажете.</p>
        </CartContentContainer>
    );
};

export default CartContent;
