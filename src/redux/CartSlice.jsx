import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const itemToUpdate = state.cartItems.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.quantity += amount;
                if (itemToUpdate.quantity <= 0) {
                    state.cartItems = state.cartItems.filter(item => item.id !== id);
                }
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
