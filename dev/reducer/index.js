const defaultStore = {
    loading: 0,
    error: '',
    news: []
}


const reducer = (store = defaultStore, action) => {
    const {payload} = action;
    switch(action.type) {
        case 'SET_LOADING': return {
            ...store,
            loading: payload
        }
        case 'SET_ERROR': return {
            ...store,
            error: payload
        }
        case 'SET_NEWS':
            return {
                ...store,
                news: payload
            }
        default: return store
    }
}

export default reducer;