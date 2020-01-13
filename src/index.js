import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react/App';
import * as serviceWorker from './react/serviceWorker';
import { MemoryRouter as Router } from 'react-router-dom';
import store from './redux/stores';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
