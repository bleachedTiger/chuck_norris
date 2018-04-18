import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

const MyApp = () => (
  <Router>
    <MuiThemeProvider>
      <Route path='/' component={App} />
    </MuiThemeProvider>
  </Router>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
