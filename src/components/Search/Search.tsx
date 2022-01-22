import React from 'react';

import { SearchForm } from './Search.styles';

import SearchIcon from '../../assets/imgs/search.svg';

const Search = () => {
    return (
        <SearchForm>
            <img src={SearchIcon} alt="search icon"/>
            <input type="text" placeholder='Найти в Лавке'/>
        </SearchForm>
    );
};

export default Search;
