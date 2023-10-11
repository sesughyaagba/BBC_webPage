import mobileSearch from "../../assets/Images/mobileSearch.svg";
import mobileCart from '../../assets/Images/mobileCart.svg';
import mobileMenu from '../../assets/Images/mobileMenu.svg';
import React, { useState } from 'react';

const menuItems = [
  { text: 'Home', href: '#' },
  { text: 'Product', href: '#' },
  { text: 'Pricing', href: '#' },
  { text: 'Contact', href: '#' },
];
const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="mobile-nav">
        <div className="top-bar">
          <span>Bandage</span>
          <div className="top-bar_btns">
            <button>
              <img src={mobileSearch} alt="mobile search" />
            </button>
            <button>
              <img src={mobileCart} alt="mobile cart" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src={mobileMenu} alt="mobile menu" />
            </button>
          </div>
        </div>
        <ul className={isMenuOpen ? 'nav-links-ul' : 'hidden'}>
          {menuItems.map((menuItem, i) => (
            <li key={i}>
              <a href={menuItem.href}>{menuItem.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
