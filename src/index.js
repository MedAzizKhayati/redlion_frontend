import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalProvider from './context/GlobalProvider';
import './index.css';
import GlobalNavigator from './navigators';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GlobalProvider>
    <GlobalNavigator />
  </GlobalProvider>
);