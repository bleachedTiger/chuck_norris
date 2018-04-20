import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const MyApp = () => (
  <Router>
    <MuiThemeProvider>
      <Route path='/' component={App} />
    </MuiThemeProvider>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
