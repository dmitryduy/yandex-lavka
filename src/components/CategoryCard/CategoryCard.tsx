import React, { FC } from 'react';
import { Card } from './CategoryCard.styles';
import { BASE_URL } from "../../hooks/useFetch";

interface ICategoryCardProps {
    title: string,
    image: string
    grid: number
}

const CategoryCard: FC<ICategoryCardProps> = ({image, title, grid}) => {
    return (
            <Card to={`${BASE_URL}/category/${image}`} grid={grid}>
                <figure>
                    <img src={`${BASE_URL}/images/${image}.webp`} alt={title}/>
                    <figcaption>
                        {title}
                    </figcaption>
                </figure>
            </Card>
    );
};

export default CategoryCard;
