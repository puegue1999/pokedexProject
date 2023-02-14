import AllCards from '../card/AllCards.js';
import './MainPage.css';
import React  from 'react';

function MainPage() {
    return (
        <div className="mainPage">
            <div className="header">
                <div className="ball" style={{margin:"0.4em auto", backgroundColor: "#545456"}}/>
            </div>
            <div className="mainBody">
                <AllCards />
            </div>
            <div className="footer">
                <div className="ball" style={{margin:"-1.8em auto", backgroundColor: "#eee"}} />
            </div>
        </div>
    );
}

export default MainPage;