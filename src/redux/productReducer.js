import {productsAPI} from "../api/api";

const SET_ITEMS = 'SET_ITEMS';

let initialState = {
    category: null,
    categoryRU: null,
    items: null,
    isFetching: false
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ITEMS: {
            return {
                ...state,
                category: action.category,
                categoryRU: action.categoryRU,
                items: action.items,
                isFetching: true
            };
        }
        default:
            return state;
    }
}


export const setItems = (items, category, categoryRU) => ({type: SET_ITEMS, items, category, categoryRU});

// export const setItems = (items) => ({type: SET_ITEMS, items});


export const getProducts = (category) => {
    return (dispatch) => {
        productsAPI.getItems(category).then(response => {
            return dispatch(setItems(response.items, response.category, response.categoryRU));
        })
    }
}




export default productReducer;