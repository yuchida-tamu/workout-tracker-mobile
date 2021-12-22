import React from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
