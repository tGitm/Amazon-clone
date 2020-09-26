import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput"></input>
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"}> {/* samo v primeru da user ni prijavljen, nas redirecta na login page */}
                <div className="header_option" onClick={handleAuthenticaton}>
    <span className="header_optionLineOne">Hello {user ? user?.email : "Guest"}</span>
    <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                    </div>
                </Link>    
            </div>
            
        </div>
    )
}

export default Header;