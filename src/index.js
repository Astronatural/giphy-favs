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
        yield axios.post('/books', action.payload);
        yield put({ type: 'FETCH_GIFS' });
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

ReactDOM.render(<Provider>
    <App />
  </Provider> 
    , document.getElementById('root'));
