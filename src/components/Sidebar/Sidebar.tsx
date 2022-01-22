import React, { FC, MouseEvent } from 'react';
import { CatalogItem, SidebarContainer } from './Sidebar.styles';
import { ICatalogItem } from "../../types";
import { BASE_URL } from "../../hooks/useFetch";
import CatalogSublist from "../CatalogSublist/CatalogSublist";

interface ISidebarProps {
    data: ICatalogItem[]
}

const Sidebar: FC<ISidebarProps> = ({data}) => {

    const openAccordion = (e: MouseEvent<HTMLUListElement>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'UL') {
            return;
        }
        const activeList = (element.parentNode!.lastChild as HTMLElement).tagName === 'UL' ?
            (element.parentNode!.lastChild as HTMLElement) :
            (element.parentNode!.parentNode!.lastChild as HTMLElement);
        activeList.style.maxHeight = activeList.style.maxHeight ? '' : activeList.scrollHeight + 20 + 'px';
    }

    return (
        <SidebarContainer>
            <h2>Каталог</h2>
            <ul onClick={openAccordion}>
                {data.map(catalogItem => <React.Fragment key={catalogItem.id}>
                    <CatalogItem>
                        <div className="header">
                            <img src={`${BASE_URL}/images/${catalogItem.image}.webp`} alt={catalogItem.text}/>
                            <h4>
                                {catalogItem.text}
                            </h4>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true">
                                <path d="M1 1.5L5.5 6L1 10.5" stroke="currentColor" strokeWidth="1.5"
                                      strokeLinecap="round"/>
                            </svg>
                        </div>
                        <CatalogSublist data={catalogItem.subcategories}/>
                    </CatalogItem>
                </ React.Fragment>)}
            </ul>
        </SidebarContainer>
    );
};

export default Sidebar;
