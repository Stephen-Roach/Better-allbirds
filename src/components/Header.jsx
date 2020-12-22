import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import HelpIcon from '@material-ui/icons/HelpOutlineOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';

import { connect } from 'react-redux';

function Header({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count++;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav className='header'>
      <div className='header__navLeft'>
        <Link to='/mens' className='header__link'>
          MEN
        </Link>
        <Link to='/womens' className='header__link'>
          WOMEN
        </Link>
        <Link to='/kids' className='header__link'>
          KIDS
        </Link>
        <Link to='gifts' className='header__link'>
          GIFTS
        </Link>
      </div>
      <div className='header__center'>
        <Link to='/' className='header__link'>
          <img
            className='header__logo'
            src='https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg'
            alt='...'
          />
        </Link>
      </div>
      <div className='header__navRight'>
        <Link to='/our-materials' className='header__link'>
          OUR MATERIALS
        </Link>
        <Link to='/stores' className='header__link'>
          STORES
        </Link>
        <Link to='/user' className='header__link'>
          <UserIcon fontSize='large' />
        </Link>
        <Link to='/help' className='header__link'>
          <HelpIcon fontSize='large' />
        </Link>
        <Link to='/cart' className='header__link'>
          <ShoppingCartIcon fontSize='large' />
          <p>{cartCount}</p>
        </Link>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Header);
