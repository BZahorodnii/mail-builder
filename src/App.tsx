import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppWrapper from './containers/AppWrapper';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppWrapper/>
    </Provider>
  )
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);