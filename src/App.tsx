import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <>
            <Header/>
            <div className='container'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
