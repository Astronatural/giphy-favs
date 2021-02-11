import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function* searchGif(action) {
    try {
        // action.payload: { searchQ }
        yield axios.post('/api/search', action.payload).then((response) => {
        put({ type: 'FETCH_GIFS' , payload: response});
            });
    } catch (error) {
        console.log(`Error fetching books`, error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('POST_SEARCH', searchGif);
}


const getSearch = (state = {}, action) => {
    if (action.type === 'FETCH_GIFS') {
        return action.payload;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers(
        {
            getSearch,
        }
    ),
    // Tell redux that we want to use our new logger
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
