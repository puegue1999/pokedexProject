import Header from './Header.js';
import Footer from './Footer.js';
import AllCards from '../card/AllCards.js';
import './MainPage.css'

function MainPage() {
    return (
        <div className="mainPage" style={{ 
            backgroundImage: `url("https://i.pinimg.com/originals/2a/1d/d7/2a1dd7860f40ebd2c054644a4448b86e.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
        }}>
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