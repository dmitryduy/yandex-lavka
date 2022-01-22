import React from 'react';
import { Cart, OrderButton } from './CartAside.styles';
import CartContent from "../CartContent/CartContent";

const CartAside = () => {
    return (
        <Cart>
            <h2>Корзина</h2>
            <CartContent/>
            <OrderButton disabled>
                <p>Закажите что-нибудь</p>
                <p>0 ₽</p>
            </OrderButton>
        </Cart>
    );
};

export default CartAside;
