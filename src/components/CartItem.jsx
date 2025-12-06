import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-unit-price">${item.cost}</p>
            </div>
            <div className="cart-item-quantity">
                <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                >-</button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                >+</button>
            </div>
            <div className="cart-item-total">
                ${(item.cost * item.quantity).toFixed(2)}
            </div>
            <button
                className="delete-btn"
                onClick={() => onRemove(item.id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
            </button>
        </div>
    );
};

export default CartItem;
