import React from 'react';
import { HeaderContainer } from "./Header.styles";

import Logo from '../../assets/imgs/LavkaLogo.svg';
import Delivery from '../../assets/imgs/address.svg';
import Cart from '../../assets/imgs/cart.svg';
import Search from "../Search/Search";
import CustomButton from "../CustomButton/CustomButton";

const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Yandex lavka logo"/>
            <Search/>
            <CustomButton bgColor='#fce000' hoveredColor='#f1d900'
                          iconAlt='delivery icon' icon={Delivery}>
                <span>Укажите адрес доставки</span>
            </CustomButton>
            <CustomButton bgColor='#f1f0ed' hoveredColor='#e5e4e0' iconAlt='cart icon' icon={Cart}>
                <span>Корзина</span>
            </CustomButton>
        </HeaderContainer>
    );
};

export default Header;
