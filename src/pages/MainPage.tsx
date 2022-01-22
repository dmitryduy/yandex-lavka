import React, { useCallback, useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";
import { ICatalogItem } from "../types";
import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import MainContent from "../components/MainContent/MainContent";
import CartAside from "../components/CartAside/CartAside";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const MainPage = () => {
    const [sidebarData, error]  = useFetch<ICatalogItem[]>('/catalog');
    const [width, setWidth] = useState(window.innerWidth);

    const resizeHandler = useCallback(
        () => {
            setWidth(window.innerWidth);
        },
        [],
    );


    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);

    return (
       <MainContainer>
           {sidebarData && width > 1200? <Sidebar data={sidebarData as ICatalogItem[]}/>: null}
           {sidebarData && <MainContent data={sidebarData as ICatalogItem[]}/>}
           {width > 1700 && <CartAside/>}
       </MainContainer>
    );
};

export default MainPage;
