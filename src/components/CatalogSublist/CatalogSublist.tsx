import React, { FC } from 'react';
import { ISubCategory } from "../../types";
import { Sublist, SublistItem } from './CatalogSublist.styles';

interface ICatalogSublistProps {
    data: ISubCategory[]
}

const CatalogSublist: FC<ICatalogSublistProps> = ({data}) => {
    return (
        <Sublist>
            {data.map(sublistItem => <li key={sublistItem.id}>
                <SublistItem to={`/category/${sublistItem.id}`}>
                    {sublistItem.text}
                </SublistItem>
            </li>)}
        </Sublist>
    );
};

export default CatalogSublist;
