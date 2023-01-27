import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import UserCtx from './context/UserCtx';
import App from './App';
import './index.css';

const emisor = {
  id: '08c71152',
  name: 'John',
  lastName: 'Doe',
  lastConnection: null
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserCtx.Provider value={emisor}>
      <App />
    </UserCtx.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
