import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    }
}

export const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    }
}

export const fetchMoreDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_MORE_DATA_SUCCESS,
        data: data
    }
}

export const fetchMoreDataFail = (error) => {
    return {
        type: actionTypes.FETCH_MORE_DATA_FAIL,
        error: error
    }
}

export const setCity = (city) => {
    return {
        type: actionTypes.SET_CITY,
        city: city
    }
}

export const setCategory = (category) => {
    return {
        type: actionTypes.SET_CATEGORY,
        category: category
    }
}

export const setCategoryFa = (categoryFa) => {
    return {
        type: actionTypes.SET_CATEGORY_FA,
        categoryFa: categoryFa
    }
}

export const setSearch = (search) => {
    return {
        type: actionTypes.SET_SEARCH,
        search: search
    }
}

export const setProduct = (product) => {
    return {
        type: actionTypes.SET_PRODUCT,
        product: product
    }
}

export const fetchData = (city, category, search) => {
    return (dispatch) => {
        console.log('search:', search);
        let url = 'https://api.divar.ir/v8/web-search/' + city;
        if (category) {
            url = 'https://api.divar.ir/v8/web-search/' + city + '/' + category;
        }
        if (search) {
            console.log('search exists');
            url += `?q=${search}`;
        }

        axios.get(url)
            .then(response => {
                dispatch(fetchDataSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchDataFail(error));
            });
    }
}

export const fetchMoreData = (next, search) => {
    return (dispatch) => {
        let url = 'https://api.divar.ir/v8/web-search/' + next;
        
        if (search) {
            url += `&q=${search}`;
        }

        axios.get(url)
            .then(response => {
                dispatch(fetchMoreDataSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchMoreDataFail(error));
            });
    }
}