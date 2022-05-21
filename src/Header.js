import React from 'react'
import "./Header.css";
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
        <Link to="./">
            <img 
                className="header__logo"
                src={logo}
                alt='logo'
            />
        </Link>
        <div className="header__search">
            <input 
                className="header__searchInput"
                type="text"                
            />
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className="header__nav">
            <div className="header__option">
                <span className='header__option_lineOne'>
                    Hello, guest
                </span>
                <span className='header__option_lineTwo'>
                    sign in
                </span>
            </div>
            <div className="header__option">
                <span className='header__option_lineOne'>
                    Returns
                </span>
                <span className='header__option_lineTwo'>
                & Orders
                </span>
            </div>
            <div className="header__option">
                <span className='header__option_lineOne'>
                    Your
                </span>
                <span className='header__option_lineTwo'>
                    Prime
                </span>
            </div>
            <div className='header__optionBasket'>
                <Link to="/checkout"><ShoppingBasketIcon/></Link>
                <span className='header__option_lineTwo Header__basket_count'>0</span>
            </div>

        </div>
    </div>
  )
}

export default Header
