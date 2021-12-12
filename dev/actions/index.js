export const setLoading = (loading) => ({ type: 'SET_LOADING', payload: loading });
export const setError = (message) => ({ type: 'SET_ERROR', payload: message });
export const setNews = (news) => ({ type: 'SET_NEWS', payload: news });

export const loadNews = () => dispatch => {
    dispatch(setLoading(10));
    fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=4crOXIYSuwwnHZ17GedSopCXKDSJV2aE', {
        method: 'GET'
    })
        .then(response => {
            setTimeout(() => dispatch(setLoading(50)), 500);
            return response.json()
        })
        .then(json => {
            setTimeout(() => dispatch(setLoading(100)), 1000);
            dispatch(setNews(json.results));
            setTimeout(() => dispatch(setLoading(0)), 1500);
        })
        .catch(err => {
            setTimeout(() => dispatch(setLoading(100)), 1000);
            dispatch(setError(err.message));
            setTimeout(() => dispatch(setLoading(0)), 1500);
        });
}