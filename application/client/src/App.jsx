import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import './scss/app.scss';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
