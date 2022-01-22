import React, { FC } from 'react';
import { CustomButtonContainer } from './CustomButton.styles';

interface ICustomButtonProps {
    bgColor: string,
    icon?: string,
    hoveredColor?: string,
    iconAlt?: string
}

const CustomButton: FC<ICustomButtonProps> = ({hoveredColor = 'inherit', bgColor, icon, iconAlt, children}) => {
    return (
        <CustomButtonContainer hoveredColor={hoveredColor} bgColor={bgColor}>
            {icon && <img src={icon} alt={iconAlt}/>}
            {children}
        </CustomButtonContainer>
    );
};

export default CustomButton;
