import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Home';
import { AppContextProvider } from '../../AppContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppContextProvider>
      <HomePage />
    </AppContextProvider>, div);
});