import * as axios from "axios";


export const productsAPI = {
    getItems(category) {
        let url = '/' + category + '.json';
        if (category != "household_products")
            url = "/appliences.json"
        return axios.get(url).then(response => {
            return response.data
        })


        //fake request to server
    },

    getInfo(id) {
        if (id > 5)
            id = 5;
        let url = '/info/' + id + '.json';
        return axios.get(url).then(response => {
            return response.data
        })
    }
}