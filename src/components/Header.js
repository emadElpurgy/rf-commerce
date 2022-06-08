import React from 'react'
import "../css/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import useStateValue from '../StateProvider';
function Header(props) {
    const[{basket}] = useStateValue();
  return (
    <div className="header">
        <Link to="./">
            <img 
                className="header__logo"
                src="img/logo.png"
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
            <Link to="/login">
                <div className="header__option">
                    <span className='header__option_lineOne'>
                        Hello, {props.user}
                    </span>
                    <span className='header__option_lineTwo'>
                        sign in
                    </span>
                </div>
            </Link>
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
                <span className='header__option_lineTwo Header__basket_count'>{basket?.length}</span>
            </div>

        </div>
    </div>
  )
}

export default Header
