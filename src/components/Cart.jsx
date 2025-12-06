import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);

    const handleUpdateQuantity = (id, amount) => {
        dispatch(updateQuantity({ id, amount }));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleCheckout = () => {
        alert("Checkout functionality coming soon!");
    };

    return (
        <div className="cart-page fade-in">
            <div className="container">
                <h2 className="cart-title">Your Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty.</p>
                        <Link to="/products">
                            <button className="continue-shopping-btn">Start Shopping</button>
                        </Link>
                    </div>
                ) : (
                    <div className="cart-content">
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={handleUpdateQuantity}
                                    onRemove={handleRemoveItem}
                                />
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-row">
                                <span>Total Plants:</span>
                                <span>{totalQuantity}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total Cost:</span>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>
                            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                            <Link to="/products">
                                <button className="continue-shopping-btn secondary">Continue Shopping</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
