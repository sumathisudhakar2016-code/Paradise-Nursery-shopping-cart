import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const plantsArray = [
    {
        category: "Air Purifying Plants",
        plants: [
            {
                id: 1,
                name: "Snake Plant",
                image: "https://images.unsplash.com/photo-1599598425947-d352cebc493e?q=80&w=768&auto=format&fit=crop",
                description: "Produces oxygen at night, improving air quality.",
                cost: 15
            },
            {
                id: 2,
                name: "Spider Plant",
                image: "https://images.unsplash.com/photo-1572688484279-a9e8f75f9408?q=80&w=768&auto=format&fit=crop",
                description: "Filters formaldehyde and xylene from the air.",
                cost: 12
            },
            {
                id: 3,
                name: "Peace Lily",
                image: "https://images.unsplash.com/photo-1593691509543-c55ce32bf055?q=80&w=768&auto=format&fit=crop",
                description: "Removes mold spores and purifies the air.",
                cost: 18
            }
        ]
    },
    {
        category: "Aromatic Fragrant Plants",
        plants: [
            {
                id: 4,
                name: "Lavender",
                image: "https://plus.unsplash.com/premium_photo-1676321046449-38930965d836?q=80&w=768&auto=format&fit=crop",
                description: "Calming scent, great for relaxation and sleep.",
                cost: 20
            },
            {
                id: 5,
                name: "Jasmine",
                image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=768&auto=format&fit=crop",
                description: "Sweet fragrance, reduces stress and anxiety.",
                cost: 22
            },
            {
                id: 6,
                name: "Rosemary",
                image: "https://images.unsplash.com/photo-1591586792376-79ee898ea657?q=80&w=768&auto=format&fit=crop",
                description: "Invigorating scent, improves concentration.",
                cost: 15
            }
        ]
    }
];

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const [addedItems, setAddedItems] = useState({});

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedItems((prevState) => ({
            ...prevState,
            [plant.id]: true
        }));
    };

    const isAddedToCart = (id) => {
        return cartItems.some(item => item.id === id);
    };

    return (
        <div className="product-page fade-in">
            <div className="container">
                {plantsArray.map((category, index) => (
                    <div key={index} className="category-section">
                        <h2 className="category-title">{category.category}</h2>
                        <div className="product-grid">
                            {category.plants.map((plant) => (
                                <div key={plant.id} className="product-card">
                                    <div className="product-image-container">
                                        <img src={plant.image} alt={plant.name} className="product-image" />
                                        <div className="product-cost">${plant.cost}</div>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">{plant.name}</h3>
                                        <p className="product-description">{plant.description}</p>
                                        <button
                                            className={`add-to-cart-btn ${isAddedToCart(plant.id) ? 'added' : ''}`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={isAddedToCart(plant.id)}
                                        >
                                            {isAddedToCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
