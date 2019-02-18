import React, { Component } from 'react';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <GlobalStyle />
          <Routes />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
