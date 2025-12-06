import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                    <div>
                        <h3>Paradise Nursery</h3>
                        <span className="logo-subtitle">Where Green Meets Serenity</span>
                    </div>
                </Link>

                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Plants</Link>
                    <Link to="/cart" className="nav-cart-btn">
                        <div className="cart-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T660-240q33 0 56.5 23.5T720-160q0 33-23.5 56.5T660-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-402q-11 20-29.5 31T622-360H324l-44 80h480v80H280q-45 0-66-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                            </svg>
                            {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
