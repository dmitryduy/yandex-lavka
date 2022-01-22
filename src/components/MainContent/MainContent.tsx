import React, { FC } from 'react';
import { MainContainer } from "./MainContent.styles";
import { ICatalogItem } from "../../types";
import CategorySection from "../CategorySection/CategorySection";

interface IMainContentProps {
    data: ICatalogItem[]
}

const MainContent:FC<IMainContentProps> = ({ data}) => {
    return (
        <MainContainer>
            {data.map(categoryItem => <CategorySection key={categoryItem.id} title={categoryItem.text} data={categoryItem.subcategories}/>)}
        </MainContainer>
    );
};

export default MainContent;
