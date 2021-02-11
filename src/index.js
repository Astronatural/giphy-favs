import React from 'react';
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
        yield axios.post('/api/category', action.payload).then((response) => {
        yield put({ type: 'FETCH_GIFS' , payload: response});
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

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const getSearch = (state = {}, action) => {
    if (action.type === 'GET_SEARCH') {
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

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
