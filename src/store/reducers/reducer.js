import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: null,
    city: 'tehran',
    error: null,
    category: null,
    categoryFa: null,
    search: null,
    next: null,
    items: null,
    product: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: null,
                next: action.data.seo_details.next,
                items: action.data.widget_list
            }
            
        case actionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                error: action.error
            }

        case actionTypes.FETCH_MORE_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: null,
                next: action.data.seo_details.next,
                items: [...state.items, ...action.data.widget_list]
            }
            
        case actionTypes.FETCH_MORE_DATA_FAIL:
            return {
                ...state,
                error: action.error
            }

        case actionTypes.SET_CITY:
            return {
                ...state,
                city: action.city
            }

        case actionTypes.SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }

        case actionTypes.SET_CATEGORY_FA:
            return {
                ...state,
                categoryFa: action.categoryFa
            }

        case actionTypes.SET_SEARCH:
            return {
                ...state,
                search: action.search
            }

        case actionTypes.SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }
    
        default:
            return state;
    }
}

export default reducer;