// store.js
import { createStore } from 'redux';

const initialState = {
    cart: [],
    products: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const productToAdd = action.payload;
            const existingCartItem = state.cart.find(item => item.id === productToAdd.id);

            if (existingCartItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === productToAdd.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...productToAdd, quantity: 1 }]
                };
            }

        case 'REMOVE_FROM_CART':
            const productIdToRemove = action.payload;
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== productIdToRemove)
            };

        case 'SET_PRODUCTS':
            const productsData = action.payload;
            return {
                ...state,
                products: productsData
            };

        case 'INCREASE_QUANTITY':
            const productIdToIncrease = action.payload;
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === productIdToIncrease
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };

        case 'DECREASE_QUANTITY':
            const productIdToDecrease = action.payload;
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === productIdToDecrease && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            };

        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
