import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from "./components/App";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
