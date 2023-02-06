import Header from './Header.js';
import Footer from './Footer.js';
import AllCards from '../card/AllCards.js';
import './MainPage.css';
import React  from 'react';

function MainPage() {
    return (
        <div className="mainPage">
            <div className="header">
                <Header />
            </div>
            <div className="mainBody">
                <AllCards />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;