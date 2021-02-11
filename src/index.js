import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

// bring in takeEvery and put (needed by our root saga and regular sagas)
import { takeEvery, put } from 'redux-saga/effects';

// This makes a middleware for us to use.
const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(watcherSaga);

// watcher sagas will watch for actions. If they match, they fire off other sagas.
function* watcherSaga() {
    yield takeEvery('GET_GIFS', getGifs);
}

function* getGifs(action) {
    try {
        yield axios.post('/api/element', action.payload);
        yield put({ type: 'FETCH_ELEMENTS' });
    } catch (error) {
        console.log('error posting an element', error);
    }    
}

const storeInstance = createStore(
    combineReducers(
        {
            count,
        }
    ),
    // Tell redux that we want to use our new logger
    applyMiddleware(sagaMiddleware, logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
