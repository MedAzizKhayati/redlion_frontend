import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalProvider from './context/GlobalProvider';
import './index.css';
import GlobalNavigator from './navigators';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GlobalProvider>
    <GlobalNavigator />
    <ToastContainer
      theme='dark'
      position="bottom-right"
      autoClose={2000}
    />
  </GlobalProvider>
);