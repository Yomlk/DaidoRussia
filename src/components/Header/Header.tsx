import React, { useState, useEffect } from 'react';
import './media.scss';
import './style.scss';


interface HeaderProps {
  logo: string;
  nameCompany: string;
  navItems: string[];
  button1Image: string;
  button2Image: string;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  nameCompany,
  navItems,
  button1Image,
  button2Image,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  const [currentButtonImage, setCurrentButtonImage] = useState(button1Image);

 

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleButtonImage = () => {
    if (isSmallScreen) {
      setCurrentButtonImage(currentButtonImage === button1Image ? button2Image : button1Image);
    }
  };

  return (
    <header className="header">
      <div className="headerBlk">
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="NameCompany">
          <p className="NameCompanyText">{nameCompany}</p>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
        <div className="buttons">
          <button className="image-button" onClick={toggleButtonImage}>
            <img src={currentButtonImage} alt="Button Image" />
          </button>
          {isSmallScreen && (
            <button className="image-button hide-on-small-screen">
              <img src={button2Image} alt="Button 2" />
            </button>
          )}
          <button className="image-button hide-on-small-screen">
            <img src={button2Image} alt="Button 1" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

