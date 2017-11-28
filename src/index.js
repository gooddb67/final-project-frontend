import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";



const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router component={App}>
     <App />
   </Router>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
