import React from 'react';
import { Link } from 'react-router-dom';

function MobileResponse({ isOpen, handleOpen }) {
  const handleMenuItemClick = () => {
    handleOpen();
  };

  return (
    <>
    

      {isOpen && (
        <div className='mobile-items'>
          <ul>
            <li>
              <Link to='/' onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={handleMenuItemClick}>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={handleMenuItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileResponse;
