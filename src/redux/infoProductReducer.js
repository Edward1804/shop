import {productsAPI} from "../api/api";

const SET_INFO = 'SET_INFO';

let initialState = {
    idItems: null,
    category: null,
    categoryRU: null,
    title: null,
    imgage: null,
    describe: null
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INFO: {
            return {
                category: action.idItems,
                categoryRU: action.categoryRU,
                title: action.title,
                image: action.image,
                describe: action.describe,
                price: action.price
            };
        }
        default:
            return state;
    }
}



export const setInfo = (id, category, categoryRU, title, image, describe, price) => ({type: SET_INFO,
    id: id, category, categoryRU, title, image, describe, price});



export const getInfoProduct = (id) => {
    return (dispatch) => {
        productsAPI.getInfo(id).then(response => {
            let {id, category, categoryRU, title, image, describe, price} = response

            return dispatch(setInfo(id, category, categoryRU, title, image, describe, price));
        })
    }
}



export default productReducer;