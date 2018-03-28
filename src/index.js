import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
//import store from './store';
var store = null;
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

registerServiceWorker();