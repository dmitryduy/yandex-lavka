import React, { FC } from 'react';
import { Section } from "./CategorySection.styles";
import { ISubCategory } from "../../types";
import CategoryCard from "../CategoryCard/CategoryCard";

interface ICategorySectionProps {
    data: ISubCategory[],
    title: string
}

const CategorySection: FC<ICategorySectionProps> = ({data, title}) => {
    return (
        <Section>
            <h2>{title}</h2>
            <div className='cards'>
                {data.map(categoryCard => <CategoryCard key={categoryCard.id} grid={categoryCard.grid}
                                                        title={categoryCard.text} image={categoryCard.image}/>)}
            </div>
        </Section>
    );
};

export default CategorySection;
