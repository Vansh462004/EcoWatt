import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import allred from './reducer/all-reducers';
import App from './components/app';
// import { BrowserRouter } from 'react-router-dom';

const store = createStore(allred);

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


// comm